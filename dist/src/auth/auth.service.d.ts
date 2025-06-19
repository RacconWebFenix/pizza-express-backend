import { JwtService } from '@nestjs/jwt';
import { PrismaService } from '../prisma.service';
import { Cliente } from '@prisma/client';
export declare class AuthService {
    private readonly prisma;
    private readonly jwtService;
    constructor(prisma: PrismaService, jwtService: JwtService);
    validateUser(email: string, password: string): Promise<Omit<Cliente, 'password'> | null>;
    login(user: {
        id: number;
        email: string;
    }): {
        access_token: string;
    };
    register(data: {
        nome: string;
        email: string;
        password: string;
        telefone?: string;
        endereco: string;
    }): Promise<Cliente>;
}
