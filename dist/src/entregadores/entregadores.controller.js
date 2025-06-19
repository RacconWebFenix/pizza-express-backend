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
exports.EntregadoresController = void 0;
const common_1 = require("@nestjs/common");
const entregadores_service_1 = require("./entregadores.service");
const create_entregadore_dto_1 = require("./dto/create-entregadore.dto");
const update_entregadore_dto_1 = require("./dto/update-entregadore.dto");
const jwt_auth_guard_1 = require("../auth/jwt-auth.guard");
const swagger_1 = require("@nestjs/swagger");
let EntregadoresController = class EntregadoresController {
    entregadoresService;
    constructor(entregadoresService) {
        this.entregadoresService = entregadoresService;
    }
    async create(createEntregadoreDto) {
        try {
            const entregadore = await this.entregadoresService.create(createEntregadoreDto);
            return {
                statusCode: 201,
                message: 'Entregador criado com sucesso',
                data: entregadore,
            };
        }
        catch (error) {
            if (error instanceof common_1.HttpException) {
                throw error;
            }
            let message = 'Erro ao criar entregador';
            if (typeof error === 'object' &&
                error &&
                'message' in error &&
                typeof error.message === 'string') {
                message = String(error.message);
            }
            throw new common_1.HttpException({
                statusCode: common_1.HttpStatus.BAD_REQUEST,
                message,
            }, common_1.HttpStatus.BAD_REQUEST);
        }
    }
    async findAll() {
        return this.entregadoresService.findAll();
    }
    findOne(id) {
        return this.entregadoresService.findOne(+id);
    }
    update(id, updateEntregadoreDto) {
        return this.entregadoresService.update(+id, updateEntregadoreDto);
    }
    remove(id) {
        return this.entregadoresService.remove(+id);
    }
};
exports.EntregadoresController = EntregadoresController;
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiOperation)({ summary: 'Registrar novo entregador' }),
    (0, swagger_1.ApiBody)({
        schema: {
            example: {
                nome: 'Maria Entregadora',
                email: 'maria@mail.com',
                senha: '123456',
                telefone: '11988888888',
                endereco: 'Rua das Oliveiras, 456',
            },
        },
    }),
    (0, swagger_1.ApiResponse)({
        status: 201,
        description: 'Entregador registrado com sucesso',
    }),
    (0, swagger_1.ApiResponse)({
        status: 400,
        description: 'Erro de validação ou conflito',
        schema: {
            example: {
                statusCode: 400,
                message: 'Email já cadastrado',
            },
        },
    }),
    (0, swagger_1.ApiResponse)({
        status: 401,
        description: 'Não autorizado',
        schema: {
            example: {
                statusCode: 401,
                message: 'Token JWT inválido ou ausente',
            },
        },
    }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_entregadore_dto_1.CreateEntregadoreDto]),
    __metadata("design:returntype", Promise)
], EntregadoresController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({ summary: 'Listar entregadores' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Lista de entregadores' }),
    (0, swagger_1.ApiResponse)({
        status: 401,
        description: 'Não autorizado',
        schema: {
            example: {
                statusCode: 401,
                message: 'Token JWT inválido ou ausente',
            },
        },
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], EntregadoresController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Buscar entregador por ID' }),
    (0, swagger_1.ApiParam)({ name: 'id', type: Number }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Entregador encontrado' }),
    (0, swagger_1.ApiResponse)({
        status: 404,
        description: 'Entregador não encontrado',
        schema: {
            example: {
                statusCode: 404,
                message: 'Entregador não encontrado',
            },
        },
    }),
    (0, swagger_1.ApiResponse)({
        status: 401,
        description: 'Não autorizado',
        schema: {
            example: {
                statusCode: 401,
                message: 'Token JWT inválido ou ausente',
            },
        },
    }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], EntregadoresController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Atualizar entregador por ID' }),
    (0, swagger_1.ApiParam)({ name: 'id', type: Number }),
    (0, swagger_1.ApiBody)({
        schema: {
            example: {
                nome: 'Novo Nome Entregador',
            },
        },
    }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Entregador atualizado' }),
    (0, swagger_1.ApiResponse)({
        status: 404,
        description: 'Entregador não encontrado',
        schema: {
            example: {
                statusCode: 404,
                message: 'Entregador não encontrado',
            },
        },
    }),
    (0, swagger_1.ApiResponse)({
        status: 400,
        description: 'Erro de validação',
        schema: {
            example: {
                statusCode: 400,
                message: 'Dados inválidos',
            },
        },
    }),
    (0, swagger_1.ApiResponse)({
        status: 401,
        description: 'Não autorizado',
        schema: {
            example: {
                statusCode: 401,
                message: 'Token JWT inválido ou ausente',
            },
        },
    }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_entregadore_dto_1.UpdateEntregadoreDto]),
    __metadata("design:returntype", void 0)
], EntregadoresController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Remover entregador por ID' }),
    (0, swagger_1.ApiParam)({ name: 'id', type: Number }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Entregador removido' }),
    (0, swagger_1.ApiResponse)({
        status: 404,
        description: 'Entregador não encontrado',
        schema: {
            example: {
                statusCode: 404,
                message: 'Entregador não encontrado',
            },
        },
    }),
    (0, swagger_1.ApiResponse)({
        status: 401,
        description: 'Não autorizado',
        schema: {
            example: {
                statusCode: 401,
                message: 'Token JWT inválido ou ausente',
            },
        },
    }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], EntregadoresController.prototype, "remove", null);
exports.EntregadoresController = EntregadoresController = __decorate([
    (0, swagger_1.ApiTags)('Entregadores'),
    (0, swagger_1.ApiBearerAuth)('JWT'),
    (0, common_1.Controller)('entregadores'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __metadata("design:paramtypes", [entregadores_service_1.EntregadoresService])
], EntregadoresController);
//# sourceMappingURL=entregadores.controller.js.map