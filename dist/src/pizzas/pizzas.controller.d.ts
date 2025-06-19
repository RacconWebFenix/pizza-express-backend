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
            id: number;
            nome: string;
            createdAt: Date;
            updatedAt: Date;
            descricao: string | null;
            preco: number;
        };
    }>;
    findAll(): Promise<{
        id: number;
        nome: string;
        createdAt: Date;
        updatedAt: Date;
        descricao: string | null;
        preco: number;
    }[]>;
    findOne(id: string): import(".prisma/client").Prisma.Prisma__PizzaClient<{
        id: number;
        nome: string;
        createdAt: Date;
        updatedAt: Date;
        descricao: string | null;
        preco: number;
    } | null, null, import("@prisma/client/runtime/library").DefaultArgs, import(".prisma/client").Prisma.PrismaClientOptions>;
    update(id: string, updatePizzaDto: UpdatePizzaDto): import(".prisma/client").Prisma.Prisma__PizzaClient<{
        id: number;
        nome: string;
        createdAt: Date;
        updatedAt: Date;
        descricao: string | null;
        preco: number;
    }, never, import("@prisma/client/runtime/library").DefaultArgs, import(".prisma/client").Prisma.PrismaClientOptions>;
    remove(id: string): import(".prisma/client").Prisma.Prisma__PizzaClient<{
        id: number;
        nome: string;
        createdAt: Date;
        updatedAt: Date;
        descricao: string | null;
        preco: number;
    }, never, import("@prisma/client/runtime/library").DefaultArgs, import(".prisma/client").Prisma.PrismaClientOptions>;
}
