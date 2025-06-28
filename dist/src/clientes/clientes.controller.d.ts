import { ClientesService } from './clientes.service';
import { CreateClienteDto } from './dto/create-cliente.dto';
import { UpdateClienteDto } from './dto/update-cliente.dto';
export declare class ClientesController {
    private readonly clientesService;
    constructor(clientesService: ClientesService);
    create(createClienteDto: CreateClienteDto): Promise<{
        nome: string;
        id: number;
        createdAt: Date;
        updatedAt: Date;
        email: string;
        password: string;
        telefone: string | null;
        endereco: string;
    }>;
    findAll(email?: string): Promise<{
        nome: string;
        id: number;
        createdAt: Date;
        updatedAt: Date;
        email: string;
        password: string;
        telefone: string | null;
        endereco: string;
    }[]>;
    findOne(id: string): Promise<{
        nome: string;
        id: number;
        createdAt: Date;
        updatedAt: Date;
        email: string;
        password: string;
        telefone: string | null;
        endereco: string;
    } | null>;
    update(id: string, updateClienteDto: UpdateClienteDto): Promise<{
        nome: string;
        id: number;
        createdAt: Date;
        updatedAt: Date;
        email: string;
        password: string;
        telefone: string | null;
        endereco: string;
    }>;
    remove(id: string): Promise<{
        message: string;
    }>;
}
