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
            id: number;
            nome: string;
            email: string;
            password: string;
            telefone: string | null;
            endereco: string;
            createdAt: Date;
            updatedAt: Date;
        };
        entregador: {
            id: number;
            nome: string;
            telefone: string | null;
            createdAt: Date;
            updatedAt: Date;
        } | null;
        pizzas: {
            id: number;
            nome: string;
            createdAt: Date;
            updatedAt: Date;
            descricao: string | null;
            preco: number;
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
    findOne(id: string): import(".prisma/client").Prisma.Prisma__PedidoClient<({
        cliente: {
            id: number;
            nome: string;
            email: string;
            password: string;
            telefone: string | null;
            endereco: string;
            createdAt: Date;
            updatedAt: Date;
        };
        entregador: {
            id: number;
            nome: string;
            telefone: string | null;
            createdAt: Date;
            updatedAt: Date;
        } | null;
        pizzas: {
            id: number;
            nome: string;
            createdAt: Date;
            updatedAt: Date;
            descricao: string | null;
            preco: number;
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
    }) | null, null, import("@prisma/client/runtime/library").DefaultArgs, import(".prisma/client").Prisma.PrismaClientOptions>;
    update(id: string, updatePedidoDto: UpdatePedidoDto): Promise<{
        id: number;
        clienteId: number;
        status: string;
        entregadorId: number | null;
        latitude: number | null;
        longitude: number | null;
        criadoEm: Date;
        atualizadoEm: Date;
    }>;
    remove(id: string): import(".prisma/client").Prisma.Prisma__PedidoClient<{
        id: number;
        clienteId: number;
        status: string;
        entregadorId: number | null;
        latitude: number | null;
        longitude: number | null;
        criadoEm: Date;
        atualizadoEm: Date;
    }, never, import("@prisma/client/runtime/library").DefaultArgs, import(".prisma/client").Prisma.PrismaClientOptions>;
}
