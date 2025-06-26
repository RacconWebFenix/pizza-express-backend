import { PizzasService } from './pizzas.service';
import { CreatePizzaDto } from './dto/create-pizza.dto';
import { UpdatePizzaDto } from './dto/update-pizza.dto';
export declare class PizzasController {
    private readonly pizzasService;
    constructor(pizzasService: PizzasService);
    create(createPizzaDto: CreatePizzaDto): Promise<{
        statusCode: number;
        message: string;
        data: {
            nome: string;
            descricao: string | null;
            preco: number;
            id: number;
            createdAt: Date;
            updatedAt: Date;
        };
    }>;
    findAll(): Promise<{
        nome: string;
        descricao: string | null;
        preco: number;
        id: number;
        createdAt: Date;
        updatedAt: Date;
    }[]>;
    findOne(id: string): import(".prisma/client").Prisma.Prisma__PizzaClient<{
        nome: string;
        descricao: string | null;
        preco: number;
        id: number;
        createdAt: Date;
        updatedAt: Date;
    } | null, null, import("@prisma/client/runtime/library").DefaultArgs, import(".prisma/client").Prisma.PrismaClientOptions>;
    update(id: string, updatePizzaDto: UpdatePizzaDto): import(".prisma/client").Prisma.Prisma__PizzaClient<{
        nome: string;
        descricao: string | null;
        preco: number;
        id: number;
        createdAt: Date;
        updatedAt: Date;
    }, never, import("@prisma/client/runtime/library").DefaultArgs, import(".prisma/client").Prisma.PrismaClientOptions>;
    remove(id: string): import(".prisma/client").Prisma.Prisma__PizzaClient<{
        nome: string;
        descricao: string | null;
        preco: number;
        id: number;
        createdAt: Date;
        updatedAt: Date;
    }, never, import("@prisma/client/runtime/library").DefaultArgs, import(".prisma/client").Prisma.PrismaClientOptions>;
}
