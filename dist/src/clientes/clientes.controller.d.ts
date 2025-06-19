import { ClientesService } from './clientes.service';
import { CreateClienteDto } from './dto/create-cliente.dto';
import { UpdateClienteDto } from './dto/update-cliente.dto';
export declare class ClientesController {
    private readonly clientesService;
    constructor(clientesService: ClientesService);
    create(createClienteDto: CreateClienteDto): Promise<{
        statusCode: number;
        message: string;
        data: {
            id: number;
            nome: string;
            email: string;
            password: string;
            telefone: string | null;
            endereco: string;
            createdAt: Date;
            updatedAt: Date;
        };
    }>;
    findAll(email?: string): Promise<{
        id: number;
        nome: string;
        email: string;
        password: string;
        telefone: string | null;
        endereco: string;
        createdAt: Date;
        updatedAt: Date;
    }[]>;
    findOne(id: string): Promise<{
        id: number;
        nome: string;
        email: string;
        password: string;
        telefone: string | null;
        endereco: string;
        createdAt: Date;
        updatedAt: Date;
    } | null>;
    update(id: string, updateClienteDto: UpdateClienteDto): Promise<{
        id: number;
        nome: string;
        email: string;
        password: string;
        telefone: string | null;
        endereco: string;
        createdAt: Date;
        updatedAt: Date;
    }>;
    remove(id: string): Promise<{
        id: number;
        nome: string;
        email: string;
        password: string;
        telefone: string | null;
        endereco: string;
        createdAt: Date;
        updatedAt: Date;
    }>;
}
