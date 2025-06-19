import { AuthService } from './auth.service';
import { CreateClienteDto } from '../clientes/dto/create-cliente.dto';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    login(body: {
        email: string;
        password: string;
    }): Promise<{
        access_token: string;
    }>;
    register(createClienteDto: CreateClienteDto): Promise<{
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
