import { PizzasService } from './pizzas.service';
import { CreatePizzaDto } from './dto/create-pizza.dto';
import { UpdatePizzaDto } from './dto/update-pizza.dto';
import { UploadService } from '../upload/upload.service';
export declare class PizzasController {
    private readonly pizzasService;
    private readonly uploadService;
    constructor(pizzasService: PizzasService, uploadService: UploadService);
    create(createPizzaDto: CreatePizzaDto): Promise<{
        statusCode: number;
        message: string;
        data: {
            id: number;
            nome: string;
            createdAt: Date;
            updatedAt: Date;
            descricao: string | null;
            preco: number;
            imagemUrl: string | null;
        };
    }>;
    createWithImage(createPizzaDto: CreatePizzaDto, file: Express.Multer.File): Promise<{
        statusCode: number;
        message: string;
        data: {
            id: number;
            nome: string;
            createdAt: Date;
            updatedAt: Date;
            descricao: string | null;
            preco: number;
            imagemUrl: string | null;
        };
    }>;
    uploadImage(id: string, file: Express.Multer.File): Promise<{
        statusCode: number;
        message: string;
        data: {
            imagemUrl: string | null;
        };
    }>;
    findAll(): Promise<{
        id: number;
        nome: string;
        createdAt: Date;
        updatedAt: Date;
        descricao: string | null;
        preco: number;
        imagemUrl: string | null;
    }[]>;
    findOne(id: string): Promise<{
        id: number;
        nome: string;
        createdAt: Date;
        updatedAt: Date;
        descricao: string | null;
        preco: number;
        imagemUrl: string | null;
    } | null>;
    update(id: string, updatePizzaDto: UpdatePizzaDto): Promise<{
        statusCode: number;
        message: string;
        data: {
            id: number;
            nome: string;
            createdAt: Date;
            updatedAt: Date;
            descricao: string | null;
            preco: number;
            imagemUrl: string | null;
        };
    }>;
    remove(id: string): Promise<{
        statusCode: number;
        message: string;
    }>;
}
