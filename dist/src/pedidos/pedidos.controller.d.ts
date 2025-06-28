import { PedidosService } from './pedidos.service';
import { CreatePedidoDto } from './dto/create-pedido.dto';
import { UpdatePedidoDto } from './dto/update-pedido.dto';
export declare class PedidosController {
    private readonly pedidosService;
    constructor(pedidosService: PedidosService);
    create(createPedidoDto: CreatePedidoDto): Promise<{
        statusCode: number;
        message: string;
        data: {
            id: number;
            clienteId: number;
            status: string;
            entregadorId: number | null;
            latitude: number | null;
            longitude: number | null;
            criadoEm: Date;
            atualizadoEm: Date;
        };
    }>;
    findAll(): Promise<({
        cliente: {
            nome: string;
            id: number;
            createdAt: Date;
            updatedAt: Date;
            email: string;
            password: string;
            telefone: string | null;
            endereco: string;
        };
        entregador: {
            nome: string;
            id: number;
            createdAt: Date;
            updatedAt: Date;
            telefone: string | null;
        } | null;
        pizzas: {
            nome: string;
            descricao: string | null;
            preco: number;
            imagemUrl: string | null;
            id: number;
            createdAt: Date;
            updatedAt: Date;
        }[];
    } & {
        id: number;
        clienteId: number;
        status: string;
        entregadorId: number | null;
        latitude: number | null;
        longitude: number | null;
        criadoEm: Date;
        atualizadoEm: Date;
    })[]>;
    findOne(id: string): Promise<{
        cliente: {
            nome: string;
            id: number;
            createdAt: Date;
            updatedAt: Date;
            email: string;
            password: string;
            telefone: string | null;
            endereco: string;
        };
        entregador: {
            nome: string;
            id: number;
            createdAt: Date;
            updatedAt: Date;
            telefone: string | null;
        } | null;
        pizzas: {
            nome: string;
            descricao: string | null;
            preco: number;
            imagemUrl: string | null;
            id: number;
            createdAt: Date;
            updatedAt: Date;
        }[];
    } & {
        id: number;
        clienteId: number;
        status: string;
        entregadorId: number | null;
        latitude: number | null;
        longitude: number | null;
        criadoEm: Date;
        atualizadoEm: Date;
    }>;
    update(id: string, updatePedidoDto: UpdatePedidoDto): Promise<{
        statusCode: number;
        message: string;
        data: {
            id: number;
            clienteId: number;
            status: string;
            entregadorId: number | null;
            latitude: number | null;
            longitude: number | null;
            criadoEm: Date;
            atualizadoEm: Date;
        };
    }>;
    remove(id: string): Promise<{
        statusCode: number;
        message: string;
    }>;
}
