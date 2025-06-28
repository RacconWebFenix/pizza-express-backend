import { AuthService } from './auth.service';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    login(loginDto: {
        email: string;
        password: string;
    }): Promise<{
        access_token: string;
    }>;
    register(registerDto: {
        nome: string;
        email: string;
        password: string;
        telefone?: string;
        endereco?: string;
    }): Promise<{
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
