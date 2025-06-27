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
            throw new common_1.HttpException('Erro interno do servidor', common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    async findAll() {
        try {
            return await this.pedidosService.findAll();
        }
        catch (error) {
            throw new common_1.HttpException('Erro interno do servidor', common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    async findOne(id) {
        try {
            const pedido = await this.pedidosService.findOne(+id);
            if (!pedido) {
                throw new common_1.HttpException('Pedido não encontrado', common_1.HttpStatus.NOT_FOUND);
            }
            return pedido;
        }
        catch (error) {
            if (error instanceof common_1.HttpException) {
                throw error;
            }
            throw new common_1.HttpException('Erro interno do servidor', common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    async update(id, updatePedidoDto) {
        try {
            const pedido = await this.pedidosService.update(+id, updatePedidoDto);
            return {
                statusCode: 200,
                message: 'Pedido atualizado com sucesso',
                data: pedido,
            };
        }
        catch (error) {
            if (error.code === 'P2025') {
                throw new common_1.HttpException('Pedido não encontrado', common_1.HttpStatus.NOT_FOUND);
            }
            throw new common_1.HttpException('Erro interno do servidor', common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    async remove(id) {
        try {
            await this.pedidosService.remove(+id);
            return {
                statusCode: 200,
                message: 'Pedido removido com sucesso',
            };
        }
        catch (error) {
            if (error.code === 'P2025') {
                throw new common_1.HttpException('Pedido não encontrado', common_1.HttpStatus.NOT_FOUND);
            }
            throw new common_1.HttpException('Erro interno do servidor', common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
};
exports.PedidosController = PedidosController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_pedido_dto_1.CreatePedidoDto]),
    __metadata("design:returntype", Promise)
], PedidosController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], PedidosController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], PedidosController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_pedido_dto_1.UpdatePedidoDto]),
    __metadata("design:returntype", Promise)
], PedidosController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], PedidosController.prototype, "remove", null);
exports.PedidosController = PedidosController = __decorate([
    (0, common_1.Controller)('pedidos'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __metadata("design:paramtypes", [pedidos_service_1.PedidosService])
], PedidosController);
//# sourceMappingURL=pedidos.controller.js.map