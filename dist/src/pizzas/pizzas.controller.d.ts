import { PizzasService } from './pizzas.service';
import { CreatePizzaDto } from './dto/create-pizza.dto';
import { UpdatePizzaDto } from './dto/update-pizza.dto';
export declare class PizzasController {
    private readonly pizzasService;
    constructor(pizzasService: PizzasService);
    create(createPizzaDto: CreatePizzaDto): Promise<{
        statusCode: number;
        message: string;
        data: {
            nome: string;
            descricao: string | null;
            preco: number;
            id: number;
            createdAt: Date;
            updatedAt: Date;
        };
    }>;
    findAll(): Promise<{
        nome: string;
        descricao: string | null;
        preco: number;
        id: number;
        createdAt: Date;
        updatedAt: Date;
    }[]>;
    findOne(id: string): Promise<{
        nome: string;
        descricao: string | null;
        preco: number;
        id: number;
        createdAt: Date;
        updatedAt: Date;
    } | null>;
    update(id: string, updatePizzaDto: UpdatePizzaDto): Promise<{
        statusCode: number;
        message: string;
        data: {
            nome: string;
            descricao: string | null;
            preco: number;
            id: number;
            createdAt: Date;
            updatedAt: Date;
        };
    }>;
    remove(id: string): Promise<{
        statusCode: number;
        message: string;
    }>;
}
