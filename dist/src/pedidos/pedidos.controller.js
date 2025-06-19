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
exports.PedidosController = void 0;
const common_1 = require("@nestjs/common");
const pedidos_service_1 = require("./pedidos.service");
const create_pedido_dto_1 = require("./dto/create-pedido.dto");
const update_pedido_dto_1 = require("./dto/update-pedido.dto");
const jwt_auth_guard_1 = require("../auth/jwt-auth.guard");
const swagger_1 = require("@nestjs/swagger");
let PedidosController = class PedidosController {
    pedidosService;
    constructor(pedidosService) {
        this.pedidosService = pedidosService;
    }
    async create(createPedidoDto) {
        try {
            const pedido = await this.pedidosService.create(createPedidoDto);
            return {
                statusCode: 201,
                message: 'Pedido criado com sucesso',
                data: pedido,
            };
        }
        catch (error) {
            if (error instanceof common_1.HttpException) {
                throw error;
            }
            let message = 'Erro ao criar pedido';
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
        return this.pedidosService.findAll();
    }
    findOne(id) {
        return this.pedidosService.findOne(+id);
    }
    update(id, updatePedidoDto) {
        return this.pedidosService.update(+id, updatePedidoDto);
    }
    remove(id) {
        return this.pedidosService.remove(+id);
    }
};
exports.PedidosController = PedidosController;
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiOperation)({ summary: 'Criar novo pedido' }),
    (0, swagger_1.ApiBody)({
        schema: {
            example: {
                clienteId: 1,
                entregadorId: 1,
                pizzas: [1],
                enderecoEntrega: 'Rua das Flores, 123',
                latitude: -23.55052,
                longitude: -46.633308,
            },
        },
    }),
    (0, swagger_1.ApiResponse)({ status: 201, description: 'Pedido criado com sucesso' }),
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
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_pedido_dto_1.CreatePedidoDto]),
    __metadata("design:returntype", Promise)
], PedidosController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({ summary: 'Listar pedidos' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Lista de pedidos' }),
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
], PedidosController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Buscar pedido por ID' }),
    (0, swagger_1.ApiParam)({ name: 'id', type: Number }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Pedido encontrado' }),
    (0, swagger_1.ApiResponse)({
        status: 404,
        description: 'Pedido não encontrado',
        schema: {
            example: {
                statusCode: 404,
                message: 'Pedido não encontrado',
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
], PedidosController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Atualizar pedido por ID' }),
    (0, swagger_1.ApiParam)({ name: 'id', type: Number }),
    (0, swagger_1.ApiBody)({ schema: { example: { enderecoEntrega: 'Novo Endereço' } } }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Pedido atualizado' }),
    (0, swagger_1.ApiResponse)({
        status: 404,
        description: 'Pedido não encontrado',
        schema: {
            example: {
                statusCode: 404,
                message: 'Pedido não encontrado',
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
    __metadata("design:paramtypes", [String, update_pedido_dto_1.UpdatePedidoDto]),
    __metadata("design:returntype", void 0)
], PedidosController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Remover pedido por ID' }),
    (0, swagger_1.ApiParam)({ name: 'id', type: Number }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Pedido removido' }),
    (0, swagger_1.ApiResponse)({
        status: 404,
        description: 'Pedido não encontrado',
        schema: {
            example: {
                statusCode: 404,
                message: 'Pedido não encontrado',
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
], PedidosController.prototype, "remove", null);
exports.PedidosController = PedidosController = __decorate([
    (0, swagger_1.ApiTags)('Pedidos'),
    (0, swagger_1.ApiBearerAuth)('JWT'),
    (0, common_1.Controller)('pedidos'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __metadata("design:paramtypes", [pedidos_service_1.PedidosService])
], PedidosController);
//# sourceMappingURL=pedidos.controller.js.map