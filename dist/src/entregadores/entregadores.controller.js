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
let EntregadoresController = class EntregadoresController {
    entregadoresService;
    constructor(entregadoresService) {
        this.entregadoresService = entregadoresService;
    }
    async create(createEntregadoreDto) {
        try {
            const entregador = await this.entregadoresService.create(createEntregadoreDto);
            return {
                statusCode: 201,
                message: 'Entregador criado com sucesso',
                data: entregador,
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
            return await this.entregadoresService.findAll();
        }
        catch (error) {
            throw new common_1.HttpException('Erro interno do servidor', common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    async findOne(id) {
        try {
            const entregador = await this.entregadoresService.findOne(+id);
            if (!entregador) {
                throw new common_1.HttpException('Entregador não encontrado', common_1.HttpStatus.NOT_FOUND);
            }
            return entregador;
        }
        catch (error) {
            if (error instanceof common_1.HttpException) {
                throw error;
            }
            throw new common_1.HttpException('Erro interno do servidor', common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    async update(id, updateEntregadoreDto) {
        try {
            const entregador = await this.entregadoresService.update(+id, updateEntregadoreDto);
            return {
                statusCode: 200,
                message: 'Entregador atualizado com sucesso',
                data: entregador,
            };
        }
        catch (error) {
            if (error.code === 'P2025') {
                throw new common_1.HttpException('Entregador não encontrado', common_1.HttpStatus.NOT_FOUND);
            }
            throw new common_1.HttpException('Erro interno do servidor', common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    async remove(id) {
        try {
            await this.entregadoresService.remove(+id);
            return {
                statusCode: 200,
                message: 'Entregador removido com sucesso',
            };
        }
        catch (error) {
            if (error.code === 'P2025') {
                throw new common_1.HttpException('Entregador não encontrado', common_1.HttpStatus.NOT_FOUND);
            }
            throw new common_1.HttpException('Erro interno do servidor', common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
};
exports.EntregadoresController = EntregadoresController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_entregadore_dto_1.CreateEntregadoreDto]),
    __metadata("design:returntype", Promise)
], EntregadoresController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], EntregadoresController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], EntregadoresController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_entregadore_dto_1.UpdateEntregadoreDto]),
    __metadata("design:returntype", Promise)
], EntregadoresController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], EntregadoresController.prototype, "remove", null);
exports.EntregadoresController = EntregadoresController = __decorate([
    (0, common_1.Controller)('entregadores'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __metadata("design:paramtypes", [entregadores_service_1.EntregadoresService])
], EntregadoresController);
//# sourceMappingURL=entregadores.controller.js.map