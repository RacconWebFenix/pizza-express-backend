"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PizzasController = void 0;
const common_1 = require("@nestjs/common");
const pizzas_service_1 = require("./pizzas.service");
const create_pizza_dto_1 = require("./dto/create-pizza.dto");
const update_pizza_dto_1 = require("./dto/update-pizza.dto");
const jwt_auth_guard_1 = require("../auth/jwt-auth.guard");
const swagger_1 = require("@nestjs/swagger");
let PizzasController = class PizzasController {
    pizzasService;
    constructor(pizzasService) {
        this.pizzasService = pizzasService;
    }
    async create(createPizzaDto) {
        try {
            const pizza = await this.pizzasService.create(createPizzaDto);
            return {
                statusCode: 201,
                message: 'Pizza criada com sucesso',
                data: pizza,
            };
        }
        catch (error) {
            if (error instanceof common_1.HttpException) {
                throw error;
            }
            const errMsg = typeof error === 'object' && error && 'message' in error
                ? error.message
                : undefined;
            throw new common_1.HttpException({
                statusCode: common_1.HttpStatus.BAD_REQUEST,
                message: errMsg || 'Erro ao criar pizza',
            }, common_1.HttpStatus.BAD_REQUEST);
        }
    }
    async findAll() {
        return this.pizzasService.findAll();
    }
    findOne(id) {
        return this.pizzasService.findOne(+id);
    }
    update(id, updatePizzaDto) {
        return this.pizzasService.update(+id, updatePizzaDto);
    }
    remove(id) {
        return this.pizzasService.remove(+id);
    }
};
exports.PizzasController = PizzasController;
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiOperation)({ summary: 'Criar uma nova pizza' }),
    (0, swagger_1.ApiBody)({
        schema: {
            example: {
                nome: 'Quatro Queijos',
                descricao: 'Mussarela, parmesão, provolone, gorgonzola',
                preco: 58.49,
            },
        },
    }),
    (0, swagger_1.ApiResponse)({
        status: 201,
        description: 'Pizza criada com sucesso',
        schema: {
            example: {
                statusCode: 201,
                message: 'Pizza criada com sucesso',
                data: {
                    id: 1,
                    nome: 'Quatro Queijos',
                    descricao: 'Mussarela, parmesão, provolone, gorgonzola',
                    preco: 58.49,
                },
            },
        },
    }),
    (0, swagger_1.ApiResponse)({
        status: 400,
        description: 'Erro de validação',
        schema: {
            example: {
                statusCode: 400,
                message: [
                    'nome must be longer than or equal to 2 characters',
                    'preco must not be less than 0',
                ],
                error: 'Bad Request',
            },
        },
    }),
    (0, swagger_1.ApiResponse)({
        status: 500,
        description: 'Erro interno do servidor',
        schema: {
            example: {
                statusCode: 500,
                message: 'Erro interno do servidor',
                error: 'Internal Server Error',
            },
        },
    }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_pizza_dto_1.CreatePizzaDto]),
    __metadata("design:returntype", Promise)
], PizzasController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({ summary: 'Listar todas as pizzas' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Lista de pizzas' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], PizzasController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Buscar pizza por ID' }),
    (0, swagger_1.ApiParam)({ name: 'id', type: Number }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Pizza encontrada' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], PizzasController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Atualizar pizza por ID' }),
    (0, swagger_1.ApiParam)({ name: 'id', type: Number }),
    (0, swagger_1.ApiBody)({ schema: { example: { nome: 'Nova Pizza' } } }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Pizza atualizada',
        schema: { example: { id: 1, nome: 'Nova Pizza', preco: 60 } },
    }),
    (0, swagger_1.ApiResponse)({
        status: 404,
        description: 'Pizza não encontrada',
        schema: {
            example: {
                statusCode: 404,
                message: 'Pizza não encontrada',
                error: 'Not Found',
            },
        },
    }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_pizza_dto_1.UpdatePizzaDto]),
    __metadata("design:returntype", void 0)
], PizzasController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Remover pizza por ID' }),
    (0, swagger_1.ApiParam)({ name: 'id', type: Number }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Pizza removida',
        schema: { example: { id: 1, nome: 'Quatro Queijos', preco: 58.49 } },
    }),
    (0, swagger_1.ApiResponse)({
        status: 404,
        description: 'Pizza não encontrada',
        schema: {
            example: {
                statusCode: 404,
                message: 'Pizza não encontrada',
                error: 'Not Found',
            },
        },
    }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], PizzasController.prototype, "remove", null);
exports.PizzasController = PizzasController = __decorate([
    (0, swagger_1.ApiTags)('Pizzas'),
    (0, swagger_1.ApiBearerAuth)('JWT'),
    (0, common_1.Controller)('pizzas'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __metadata("design:paramtypes", [pizzas_service_1.PizzasService])
], PizzasController);
//# sourceMappingURL=pizzas.controller.js.map