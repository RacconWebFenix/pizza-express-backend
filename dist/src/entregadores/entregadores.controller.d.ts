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
            nome: string;
            id: number;
            createdAt: Date;
            updatedAt: Date;
            telefone: string | null;
        };
    }>;
    findAll(): Promise<{
        nome: string;
        id: number;
        createdAt: Date;
        updatedAt: Date;
        telefone: string | null;
    }[]>;
    findOne(id: string): import(".prisma/client").Prisma.Prisma__EntregadorClient<{
        nome: string;
        id: number;
        createdAt: Date;
        updatedAt: Date;
        telefone: string | null;
    } | null, null, import("@prisma/client/runtime/library").DefaultArgs, import(".prisma/client").Prisma.PrismaClientOptions>;
    update(id: string, updateEntregadoreDto: UpdateEntregadoreDto): import(".prisma/client").Prisma.Prisma__EntregadorClient<{
        nome: string;
        id: number;
        createdAt: Date;
        updatedAt: Date;
        telefone: string | null;
    }, never, import("@prisma/client/runtime/library").DefaultArgs, import(".prisma/client").Prisma.PrismaClientOptions>;
    remove(id: string): import(".prisma/client").Prisma.Prisma__EntregadorClient<{
        nome: string;
        id: number;
        createdAt: Date;
        updatedAt: Date;
        telefone: string | null;
    }, never, import("@prisma/client/runtime/library").DefaultArgs, import(".prisma/client").Prisma.PrismaClientOptions>;
}
