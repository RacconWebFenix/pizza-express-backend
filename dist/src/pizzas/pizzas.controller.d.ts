import { PizzasService } from './pizzas.service';
import { CreatePizzaDto } from './dto/create-pizza.dto';
import { CloudinaryService } from '../cloudinary/cloudinary.service';
export declare class PizzasController {
    private readonly pizzasService;
    private readonly cloudinaryService;
    constructor(pizzasService: PizzasService, cloudinaryService: CloudinaryService);
    uploadImage(file?: Express.Multer.File): Promise<{
        statusCode: number;
        message: string;
        data: {
            imageUrl: string;
            originalname: string;
            mimetype: string;
            size: number;
        };
    }>;
    createWithImage(file?: Express.Multer.File, body?: Record<string, string>): Promise<{
        statusCode: number;
        message: string;
        data: {
            nome: string;
            descricao: string | null;
            preco: number;
            id: number;
            imagemUrl: string | null;
            createdAt: Date;
            updatedAt: Date;
        };
    }>;
    create(body: CreatePizzaDto): Promise<{
        statusCode: number;
        message: string;
        data: {
            image: string | null;
            imagemUrl: undefined;
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
        imagemUrl: string | null;
        createdAt: Date;
        updatedAt: Date;
    }[]>;
    findOne(id: string): Promise<{
        nome: string;
        descricao: string | null;
        preco: number;
        id: number;
        imagemUrl: string | null;
        createdAt: Date;
        updatedAt: Date;
    } | null>;
    update(id: string, body: CreatePizzaDto): Promise<{
        statusCode: number;
        message: string;
        data: {
            image: string | null;
            imagemUrl: undefined;
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
