import {
  Injectable,
  BadRequestException,
  NotFoundException,
  InternalServerErrorException,
} from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { CreateSplitPaymentDto } from './dto/split-payment.dto';
import { Decimal } from '@prisma/client/runtime/library';
import { PaymentStatus } from '@prisma/client';

@Injectable()
export class SplitPaymentService {
  constructor(private readonly prisma: PrismaService) {}

  /**
   * Processa pagamento dividido para uma sessão de mesa
   * SOLID: Single Responsibility - apenas processa pagamentos
   */
  async processSplitPayment(dto: CreateSplitPaymentDto) {
    // 1. Validar sessão
    const session = await this.prisma.tableSession.findUnique({
      where: { id: dto.sessionId },
      select: {
        id: true,
        total: true,
        closedAt: true,
        payments: {
          where: { status: 'COMPLETED' },
          select: { amount: true, tip: true },
        },
      },
    });

    if (!session) {
      throw new NotFoundException(`Session ${dto.sessionId} not found`);
    }

    if (session.closedAt) {
      throw new BadRequestException('Session is already closed');
    }

    // 2. Calcular total a ser pago
    const sessionTotal = new Decimal(session.total);

    // Total já pago
    const alreadyPaid = session.payments.reduce(
      (sum, p) => sum.add(new Decimal(p.amount)).add(new Decimal(p.tip || 0)),
      new Decimal(0),
    );

    // Total dos novos pagamentos
    const newPaymentTotal = dto.payments.reduce(
      (sum, p) => sum + p.amount + (p.tip || 0),
      0,
    );

    const remaining = sessionTotal.sub(alreadyPaid);

    // 3. Validar montante
    if (new Decimal(newPaymentTotal).lessThan(remaining)) {
      throw new BadRequestException(
        `Payment total (${newPaymentTotal}) is less than remaining (${remaining.toString()})`,
      );
    }

    if (new Decimal(newPaymentTotal).greaterThan(remaining)) {
      throw new BadRequestException(
        `Payment total (${newPaymentTotal}) exceeds remaining (${remaining.toString()})`,
      );
    }

    // 4. Processar pagamentos em transação
    try {
      const result = await this.prisma.$transaction(async (tx) => {
        const createdPayments = [];

        for (const payment of dto.payments) {
          const newPayment = await tx.payment.create({
            data: {
              sessionId: dto.sessionId,
              amount: new Decimal(payment.amount),
              method: payment.method,
              status: 'COMPLETED' as PaymentStatus,
              paidBy: payment.paidBy,
              tip: payment.tip ? new Decimal(payment.tip) : new Decimal(0),
              externalId: payment.externalId,
              completedAt: new Date(),
            },
          });

          createdPayments.push(newPayment);
        }

        // 5. Verificar se sessão foi paga completamente
        const totalPaid = alreadyPaid.add(new Decimal(newPaymentTotal));

        if (totalPaid.greaterThanOrEqualTo(sessionTotal)) {
          await tx.tableSession.update({
            where: { id: dto.sessionId },
            data: { closedAt: new Date() },
          });

          // Liberar mesa
          const sessionWithTable = await tx.tableSession.findUnique({
            where: { id: dto.sessionId },
            select: { tableId: true },
          });

          if (sessionWithTable?.tableId) {
            await tx.table.update({
              where: { id: sessionWithTable.tableId },
              data: { status: 'AVAILABLE' },
            });
          }
        }

        return createdPayments;
      });

      return {
        success: true,
        payments: result,
        sessionClosed: result.length > 0,
      };
    } catch (error) {
      throw new InternalServerErrorException(
        'Failed to process split payment',
        error instanceof Error ? error.message : 'Unknown error',
      );
    }
  }

  /**
   * Busca todos os pagamentos de uma sessão
   */
  async findBySession(sessionId: string) {
    return this.prisma.payment.findMany({
      where: { sessionId },
      orderBy: { createdAt: 'desc' },
    });
  }

  /**
   * Calcula quanto falta pagar em uma sessão
   */
  async getRemainingAmount(sessionId: string): Promise<string> {
    const session = await this.prisma.tableSession.findUnique({
      where: { id: sessionId },
      select: {
        total: true,
        payments: {
          where: { status: 'COMPLETED' },
          select: { amount: true, tip: true },
        },
      },
    });

    if (!session) {
      throw new NotFoundException(`Session ${sessionId} not found`);
    }

    const total = new Decimal(session.total);
    const paid = session.payments.reduce(
      (sum, p) => sum.add(new Decimal(p.amount)).add(new Decimal(p.tip || 0)),
      new Decimal(0),
    );

    return total.sub(paid).toString();
  }
}
