import { PrismaService } from '../prisma.service';
import { CreatePizzaDto } from './dto/create-pizza.dto';
import { UpdatePizzaDto } from './dto/update-pizza.dto';
export declare class PizzasService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    create(createPizzaDto: CreatePizzaDto): import(".prisma/client").Prisma.Prisma__PizzaClient<{
        nome: string;
        descricao: string | null;
        preco: number;
        id: number;
        createdAt: Date;
        updatedAt: Date;
    }, never, import("@prisma/client/runtime/library").DefaultArgs, import(".prisma/client").Prisma.PrismaClientOptions>;
    findAll(): import(".prisma/client").Prisma.PrismaPromise<{
        nome: string;
        descricao: string | null;
        preco: number;
        id: number;
        createdAt: Date;
        updatedAt: Date;
    }[]>;
    findOne(id: number): import(".prisma/client").Prisma.Prisma__PizzaClient<{
        nome: string;
        descricao: string | null;
        preco: number;
        id: number;
        createdAt: Date;
        updatedAt: Date;
    } | null, null, import("@prisma/client/runtime/library").DefaultArgs, import(".prisma/client").Prisma.PrismaClientOptions>;
    update(id: number, updatePizzaDto: UpdatePizzaDto): import(".prisma/client").Prisma.Prisma__PizzaClient<{
        nome: string;
        descricao: string | null;
        preco: number;
        id: number;
        createdAt: Date;
        updatedAt: Date;
    }, never, import("@prisma/client/runtime/library").DefaultArgs, import(".prisma/client").Prisma.PrismaClientOptions>;
    remove(id: number): import(".prisma/client").Prisma.Prisma__PizzaClient<{
        nome: string;
        descricao: string | null;
        preco: number;
        id: number;
        createdAt: Date;
        updatedAt: Date;
    }, never, import("@prisma/client/runtime/library").DefaultArgs, import(".prisma/client").Prisma.PrismaClientOptions>;
}
