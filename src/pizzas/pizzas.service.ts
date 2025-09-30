import {
  Injectable,
  BadRequestException,
  NotFoundException,
  ConflictException,
} from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { CreatePizzaDto } from './dto/create-pizza.dto';
import { UpdatePizzaDto } from './dto/update-pizza.dto';
import { CustomLoggerService } from '../common/logger/logger.service';
import { APP_CONSTANTS } from '../common/constants/app.constants';
import { Pizza } from '@prisma/client';

@Injectable()
export class PizzasService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly logger: CustomLoggerService,
  ) {}

  /**
   * Cria uma nova pizza com validações de negócio
   */
  async create(createPizzaDto: CreatePizzaDto): Promise<Pizza> {
    this.logger.log('Iniciando criação de nova pizza', {
      nome: createPizzaDto.nome,
      preco: createPizzaDto.preco,
    });

    // Business Rule 1: Validar preço mínimo
    await this.validateMinimumPrice(createPizzaDto.preco);

    // Business Rule 2: Verificar nome único
    await this.validateUniqueName(createPizzaDto.nome);

    // Business Rule 3: Validar dados de imagem
    this.validateImageUrl(createPizzaDto.image);

    try {
      const pizza = await this.prisma.pizza.create({
        data: {
          ...createPizzaDto,
          nome: this.sanitizeName(createPizzaDto.nome),
        },
      });

      this.logger.log('Pizza criada com sucesso', {
        pizzaId: pizza.id,
        nome: pizza.nome,
      });

      return pizza;
    } catch (error) {
      this.logger.error(
        'Erro ao criar pizza na base de dados',
        error instanceof Error ? error.message : String(error),
      );
      throw new BadRequestException(
        APP_CONSTANTS.ERROR_MESSAGES.PIZZA_CREATION_FAILED,
      );
    }
  }

  /**
   * Lista todas as pizzas ativas
   */
  async findAll(): Promise<Pizza[]> {
    this.logger.log('Listando todas as pizzas');

    try {
      const pizzas = await this.prisma.pizza.findMany({
        orderBy: { nome: 'asc' },
      });

      this.logger.log('Pizzas listadas com sucesso', {
        quantidade: pizzas.length,
      });
      return pizzas;
    } catch (error) {
      this.logger.error(
        'Erro ao listar pizzas',
        error instanceof Error ? error.message : String(error),
      );
      throw new BadRequestException(
        APP_CONSTANTS.ERROR_MESSAGES.PIZZA_FETCH_FAILED,
      );
    }
  }

  /**
   * Busca uma pizza por ID com validação de existência
   */
  async findOne(id: number): Promise<Pizza> {
    this.validateId(id);
    this.logger.log('Buscando pizza por ID', { pizzaId: id });

    const pizza = await this.prisma.pizza.findUnique({ where: { id } });

    if (!pizza) {
      this.logger.warn('Pizza não encontrada', { pizzaId: id });
      throw new NotFoundException(APP_CONSTANTS.ERROR_MESSAGES.PIZZA_NOT_FOUND);
    }

    this.logger.log('Pizza encontrada', { pizzaId: id, nome: pizza.nome });
    return pizza;
  }

  /**
   * Atualiza uma pizza com validações de negócio
   */
  async update(id: number, updatePizzaDto: UpdatePizzaDto): Promise<Pizza> {
    this.validateId(id);
    this.logger.log('Iniciando atualização de pizza', { pizzaId: id });

    // Verificar se a pizza existe
    await this.findOne(id);

    // Business Rules para update
    if (updatePizzaDto.preco) {
      await this.validateMinimumPrice(updatePizzaDto.preco);
    }

    if (updatePizzaDto.nome) {
      await this.validateUniqueName(updatePizzaDto.nome, id);
    }

    if (updatePizzaDto.image) {
      this.validateImageUrl(updatePizzaDto.image);
    }

    try {
      const updatedPizza = await this.prisma.pizza.update({ 
        where: { id }, 
        data: {
          ...updatePizzaDto,
          nome: updatePizzaDto.nome ? this.sanitizeName(updatePizzaDto.nome) : undefined,
        }
      });

      this.logger.log('Pizza atualizada com sucesso', { 
        pizzaId: id, 
        nome: updatedPizza.nome 
      });

      return updatedPizza;
    } catch (error) {
      this.logger.error('Erro ao atualizar pizza', error);
      throw new BadRequestException(APP_CONSTANTS.ERROR_MESSAGES.PIZZA_UPDATE_FAILED);
    }
  }

  /**
   * Remove uma pizza com validação de dependências
   */
  async remove(id: number): Promise<{ message: string }> {
    this.validateId(id);
    this.logger.log('Iniciando remoção de pizza', { pizzaId: id });

    // Verificar se a pizza existe
    const pizza = await this.findOne(id);

    // Business Rule: Verificar se a pizza tem pedidos associados
    await this.validateCanDelete(id);

    try {
      await this.prisma.pizza.delete({ where: { id } });

      this.logger.log('Pizza removida com sucesso', { 
        pizzaId: id, 
        nome: pizza.nome 
      });

      return { message: `Pizza "${pizza.nome}" removida com sucesso` };
    } catch (error) {
      this.logger.error('Erro ao remover pizza', error);
      throw new BadRequestException(APP_CONSTANTS.ERROR_MESSAGES.PIZZA_DELETE_FAILED);
    }
  }

  // ==================== MÉTODOS PRIVADOS DE VALIDAÇÃO ====================

  /**
   * Valida se o preço está dentro do mínimo permitido
   */
  private async validateMinimumPrice(preco: number): Promise<void> {
    const minPrice = APP_CONSTANTS.BUSINESS_RULES.PIZZA_MIN_PRICE;
    
    if (preco < minPrice) {
      this.logger.warn('Preço abaixo do mínimo permitido', { preco, minPrice });
      throw new BadRequestException(
        `Preço deve ser no mínimo R$ ${minPrice.toFixed(2)}`
      );
    }
  }

  /**
   * Valida se o nome da pizza é único
   */
  private async validateUniqueName(nome: string, excludeId?: number): Promise<void> {
    const existingPizza = await this.prisma.pizza.findFirst({
      where: {
        nome: {
          equals: nome,
          mode: 'insensitive',
        },
        ...(excludeId && { id: { not: excludeId } }),
      },
    });

    if (existingPizza) {
      this.logger.warn('Nome de pizza já existe', { nome, existingId: existingPizza.id });
      throw new ConflictException(
        `Já existe uma pizza com o nome "${nome}"`
      );
    }
  }

  /**
   * Valida URL da imagem
   */
  private validateImageUrl(imageUrl?: string): void {
    if (!imageUrl) return;

    const validExtensions = ['.jpg', '.jpeg', '.png', '.webp'];
    const hasValidExtension = validExtensions.some(ext => 
      imageUrl.toLowerCase().includes(ext)
    );

    if (!hasValidExtension) {
      this.logger.warn('URL de imagem com extensão inválida', { imageUrl });
      throw new BadRequestException(
        'URL da imagem deve ter uma extensão válida (.jpg, .jpeg, .png, .webp)'
      );
    }
  }

  /**
   * Valida se a pizza pode ser deletada (sem pedidos)
   */
  private async validateCanDelete(pizzaId: number): Promise<void> {
    const pedidosCount = await this.prisma.pedido.count({
      where: {
        pizzas: {
          some: {
            id: pizzaId,
          },
        },
      },
    });

    if (pedidosCount > 0) {
      this.logger.warn('Tentativa de deletar pizza com pedidos associados', { 
        pizzaId, 
        pedidosCount 
      });
      throw new ConflictException(
        `Não é possível remover esta pizza pois ela possui ${pedidosCount} pedido(s) associado(s)`
      );
    }
  }

  /**
   * Valida se o ID é válido
   */
  private validateId(id: number): void {
    if (!id || id <= 0 || !Number.isInteger(id)) {
      this.logger.warn('ID inválido fornecido', { id });
      throw new BadRequestException('ID deve ser um número inteiro positivo');
    }
  }

  /**
   * Sanitiza o nome da pizza
   */
  private sanitizeName(nome: string): string {
    return nome.trim().replace(/\s+/g, ' ');
  }
}
