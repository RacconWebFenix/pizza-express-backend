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
            nome: string;
            descricao: string | null;
            preco: number;
            imagemUrl: string | null;
            id: number;
            createdAt: Date;
            updatedAt: Date;
        };
    }>;
    createWithImage(createPizzaDto: CreatePizzaDto, file: Express.Multer.File): Promise<{
        statusCode: number;
        message: string;
        data: {
            nome: string;
            descricao: string | null;
            preco: number;
            imagemUrl: string | null;
            id: number;
            createdAt: Date;
            updatedAt: Date;
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
        nome: string;
        descricao: string | null;
        preco: number;
        imagemUrl: string | null;
        id: number;
        createdAt: Date;
        updatedAt: Date;
    }[]>;
    findOne(id: string): Promise<{
        nome: string;
        descricao: string | null;
        preco: number;
        imagemUrl: string | null;
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
            imagemUrl: string | null;
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
