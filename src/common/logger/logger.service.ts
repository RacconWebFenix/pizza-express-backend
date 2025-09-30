import { Injectable, LoggerService } from '@nestjs/common';
import * as winston from 'winston';

/**
 * Logger Service profissional usando Winston
 * Substitui console.log por logging estruturado e seguro
 */
@Injectable()
export class CustomLoggerService implements LoggerService {
  private logger: winston.Logger;

  constructor() {
    const isDevelopment = process.env.NODE_ENV !== 'production';

    this.logger = winston.createLogger({
      level: process.env.LOG_LEVEL || 'info',
      format: winston.format.combine(
        winston.format.timestamp({
          format: 'YYYY-MM-DD HH:mm:ss',
        }),
        winston.format.errors({ stack: true }),
        winston.format.json(),
      ),
      defaultMeta: {
        service: 'pizza-express-api',
        environment: process.env.NODE_ENV || 'development',
      },
      transports: [
        // Arquivo para erros
        new winston.transports.File({
          filename: 'logs/error.log',
          level: 'error',
          maxsize: 5242880, // 5MB
          maxFiles: 5,
        }),
        // Arquivo para todos os logs
        new winston.transports.File({
          filename: 'logs/combined.log',
          maxsize: 5242880, // 5MB
          maxFiles: 5,
        }),
      ],
    });

    // Console apenas em desenvolvimento
    if (isDevelopment) {
      this.logger.add(
        new winston.transports.Console({
          format: winston.format.combine(
            winston.format.colorize(),
            winston.format.printf(
              ({ timestamp, level, message, context, ...meta }) => {
                const ctx = context ? `[${String(context)}] ` : '';
                const metaStr = Object.keys(meta).length
                  ? ` ${JSON.stringify(meta)}`
                  : '';
                return `${String(timestamp)} ${String(level)}: ${ctx}${String(message)}${metaStr}`;
              },
            ),
          ),
        }),
      );
    }
  }

  log(message: string, meta?: Record<string, unknown> | string) {
    const logData = typeof meta === 'string' ? { context: meta } : meta;
    this.logger.info(message, logData);
  }

  error(message: string, trace?: string, context?: string) {
    this.logger.error(message, { trace, context });
  }

  warn(message: string, meta?: Record<string, unknown> | string) {
    const logData = typeof meta === 'string' ? { context: meta } : meta;
    this.logger.warn(message, logData);
  }

  debug(message: string, meta?: Record<string, unknown> | string) {
    const logData = typeof meta === 'string' ? { context: meta } : meta;
    this.logger.debug(message, logData);
  }

  verbose(message: string, meta?: Record<string, unknown> | string) {
    const logData = typeof meta === 'string' ? { context: meta } : meta;
    this.logger.verbose(message, logData);
  }

  // Métodos específicos para casos de uso do projeto
  logPayment(
    message: string,
    paymentData: { id: string; amount?: number; status?: string },
  ) {
    this.logger.info(message, {
      context: 'PaymentService',
      paymentId: paymentData.id,
      amount: paymentData.amount,
      status: paymentData.status,
    });
  }

  logOrder(
    message: string,
    orderData: { id: number; userId?: number; status?: string },
  ) {
    this.logger.info(message, {
      context: 'OrderService',
      orderId: orderData.id,
      userId: orderData.userId,
      status: orderData.status,
    });
  }

  logAuth(
    message: string,
    userData: { userId?: number; email?: string; action?: string },
  ) {
    this.logger.info(message, {
      context: 'AuthService',
      userId: userData.userId,
      email: userData.email
        ? userData.email.replace(/(.{2}).*(@.*)/, '$1***$2')
        : undefined, // Mascarar email
      action: userData.action,
    });
  }
}
