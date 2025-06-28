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
    findOne(id: string): Promise<{
        id: number;
        nome: string;
        telefone: string | null;
        createdAt: Date;
        updatedAt: Date;
    }>;
    update(id: string, updateEntregadoreDto: UpdateEntregadoreDto): Promise<{
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
    remove(id: string): Promise<{
        statusCode: number;
        message: string;
    }>;
}
