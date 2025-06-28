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
    findOne(id: string): Promise<{
        nome: string;
        id: number;
        createdAt: Date;
        updatedAt: Date;
        telefone: string | null;
    }>;
    update(id: string, updateEntregadoreDto: UpdateEntregadoreDto): Promise<{
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
    remove(id: string): Promise<{
        statusCode: number;
        message: string;
    }>;
}
