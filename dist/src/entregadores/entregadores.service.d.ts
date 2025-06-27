import { PrismaService } from '../prisma.service';
import { CreateEntregadoreDto } from './dto/create-entregadore.dto';
import { UpdateEntregadoreDto } from './dto/update-entregadore.dto';
export declare class EntregadoresService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    create(createEntregadoreDto: CreateEntregadoreDto): import(".prisma/client").Prisma.Prisma__EntregadorClient<{
        id: number;
        nome: string;
        telefone: string | null;
        createdAt: Date;
        updatedAt: Date;
    }, never, import("@prisma/client/runtime/library").DefaultArgs, import(".prisma/client").Prisma.PrismaClientOptions>;
    findAll(): import(".prisma/client").Prisma.PrismaPromise<{
        id: number;
        nome: string;
        telefone: string | null;
        createdAt: Date;
        updatedAt: Date;
    }[]>;
    findOne(id: number): import(".prisma/client").Prisma.Prisma__EntregadorClient<{
        id: number;
        nome: string;
        telefone: string | null;
        createdAt: Date;
        updatedAt: Date;
    } | null, null, import("@prisma/client/runtime/library").DefaultArgs, import(".prisma/client").Prisma.PrismaClientOptions>;
    update(id: number, updateEntregadoreDto: UpdateEntregadoreDto): import(".prisma/client").Prisma.Prisma__EntregadorClient<{
        id: number;
        nome: string;
        telefone: string | null;
        createdAt: Date;
        updatedAt: Date;
    }, never, import("@prisma/client/runtime/library").DefaultArgs, import(".prisma/client").Prisma.PrismaClientOptions>;
    remove(id: number): import(".prisma/client").Prisma.Prisma__EntregadorClient<{
        id: number;
        nome: string;
        telefone: string | null;
        createdAt: Date;
        updatedAt: Date;
    }, never, import("@prisma/client/runtime/library").DefaultArgs, import(".prisma/client").Prisma.PrismaClientOptions>;
}
