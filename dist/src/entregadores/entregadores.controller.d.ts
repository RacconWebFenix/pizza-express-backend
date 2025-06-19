import { EntregadoresService } from './entregadores.service';
import { CreateEntregadoreDto } from './dto/create-entregadore.dto';
import { UpdateEntregadoreDto } from './dto/update-entregadore.dto';
export declare class EntregadoresController {
    private readonly entregadoresService;
    constructor(entregadoresService: EntregadoresService);
    create(createEntregadoreDto: CreateEntregadoreDto): Promise<{
        statusCode: number;
        message: string;
        data: {
            id: number;
            nome: string;
            telefone: string | null;
            createdAt: Date;
            updatedAt: Date;
        };
    }>;
    findAll(): Promise<{
        id: number;
        nome: string;
        telefone: string | null;
        createdAt: Date;
        updatedAt: Date;
    }[]>;
    findOne(id: string): import(".prisma/client").Prisma.Prisma__EntregadorClient<{
        id: number;
        nome: string;
        telefone: string | null;
        createdAt: Date;
        updatedAt: Date;
    } | null, null, import("@prisma/client/runtime/library").DefaultArgs, import(".prisma/client").Prisma.PrismaClientOptions>;
    update(id: string, updateEntregadoreDto: UpdateEntregadoreDto): import(".prisma/client").Prisma.Prisma__EntregadorClient<{
        id: number;
        nome: string;
        telefone: string | null;
        createdAt: Date;
        updatedAt: Date;
    }, never, import("@prisma/client/runtime/library").DefaultArgs, import(".prisma/client").Prisma.PrismaClientOptions>;
    remove(id: string): import(".prisma/client").Prisma.Prisma__EntregadorClient<{
        id: number;
        nome: string;
        telefone: string | null;
        createdAt: Date;
        updatedAt: Date;
    }, never, import("@prisma/client/runtime/library").DefaultArgs, import(".prisma/client").Prisma.PrismaClientOptions>;
}
