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
exports.ClientesController = void 0;
const common_1 = require("@nestjs/common");
const clientes_service_1 = require("./clientes.service");
const create_cliente_dto_1 = require("./dto/create-cliente.dto");
const update_cliente_dto_1 = require("./dto/update-cliente.dto");
const jwt_auth_guard_1 = require("../auth/jwt-auth.guard");
const swagger_1 = require("@nestjs/swagger");
let ClientesController = class ClientesController {
    clientesService;
    constructor(clientesService) {
        this.clientesService = clientesService;
    }
    async create(createClienteDto) {
        try {
            const cliente = await this.clientesService.create(createClienteDto);
            return {
                statusCode: 201,
                message: 'Cliente criado com sucesso',
                data: cliente,
            };
        }
        catch (error) {
            if (error instanceof common_1.HttpException) {
                throw error;
            }
            let message = 'Erro ao criar cliente';
            if (typeof error === 'object' &&
                error !== null &&
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
    async findAll(email) {
        if (email) {
            return await this.clientesService.findByEmail(email);
        }
        return await this.clientesService.findAll();
    }
    async findOne(id) {
        return await this.clientesService.findOne(+id);
    }
    async update(id, updateClienteDto) {
        return await this.clientesService.update(+id, updateClienteDto);
    }
    async remove(id) {
        return await this.clientesService.remove(+id);
    }
};
exports.ClientesController = ClientesController;
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiOperation)({ summary: 'Registrar novo cliente' }),
    (0, swagger_1.ApiBody)({
        schema: {
            example: {
                nome: 'João Silva',
                email: 'joao@mail.com',
                senha: '123456',
                telefone: '11999999999',
                endereco: 'Rua das Flores, 123',
            },
        },
    }),
    (0, swagger_1.ApiResponse)({
        status: 201,
        description: 'Cliente registrado com sucesso',
        schema: {
            example: {
                id: 1,
                nome: 'João Silva',
                email: 'joao@mail.com',
                telefone: '11999999999',
                endereco: 'Rua das Flores, 123',
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
                    'email must be an email',
                    'senha must be longer than or equal to 6 characters',
                ],
                error: 'Bad Request',
            },
        },
    }),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_cliente_dto_1.CreateClienteDto]),
    __metadata("design:returntype", Promise)
], ClientesController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, swagger_1.ApiOperation)({ summary: 'Listar clientes ou buscar por email' }),
    (0, swagger_1.ApiQuery)({ name: 'email', required: false }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Lista de clientes' }),
    __param(0, (0, common_1.Query)('email')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ClientesController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, swagger_1.ApiOperation)({ summary: 'Buscar cliente por ID' }),
    (0, swagger_1.ApiParam)({ name: 'id', type: Number }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Cliente encontrado' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ClientesController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, swagger_1.ApiOperation)({ summary: 'Atualizar cliente por ID' }),
    (0, swagger_1.ApiParam)({ name: 'id', type: Number }),
    (0, swagger_1.ApiBody)({ schema: { example: { nome: 'Novo Nome' } } }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Cliente atualizado',
        schema: { example: { id: 1, nome: 'Novo Nome', email: 'joao@mail.com' } },
    }),
    (0, swagger_1.ApiResponse)({
        status: 404,
        description: 'Cliente não encontrado',
        schema: {
            example: {
                statusCode: 404,
                message: 'Cliente não encontrado',
                error: 'Not Found',
            },
        },
    }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_cliente_dto_1.UpdateClienteDto]),
    __metadata("design:returntype", Promise)
], ClientesController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, swagger_1.ApiOperation)({ summary: 'Remover cliente por ID' }),
    (0, swagger_1.ApiParam)({ name: 'id', type: Number }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Cliente removido',
        schema: { example: { id: 1, nome: 'João Silva', email: 'joao@mail.com' } },
    }),
    (0, swagger_1.ApiResponse)({
        status: 404,
        description: 'Cliente não encontrado',
        schema: {
            example: {
                statusCode: 404,
                message: 'Cliente não encontrado',
                error: 'Not Found',
            },
        },
    }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ClientesController.prototype, "remove", null);
exports.ClientesController = ClientesController = __decorate([
    (0, swagger_1.ApiTags)('Clientes'),
    (0, swagger_1.ApiBearerAuth)('JWT'),
    (0, common_1.Controller)('clientes'),
    __metadata("design:paramtypes", [clientes_service_1.ClientesService])
], ClientesController);
//# sourceMappingURL=clientes.controller.js.map