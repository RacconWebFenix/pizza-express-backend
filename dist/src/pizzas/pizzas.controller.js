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
            throw new common_1.HttpException(errMsg || 'Erro interno do servidor', common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    async findAll() {
        try {
            return await this.pizzasService.findAll();
        }
        catch {
            throw new common_1.HttpException('Erro interno do servidor', common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    async findOne(id) {
        return this.pizzasService.findOne(+id);
    }
    async update(id, updatePizzaDto) {
        try {
            const pizza = await this.pizzasService.update(+id, updatePizzaDto);
            return {
                statusCode: 200,
                message: 'Pizza atualizada com sucesso',
                data: pizza,
            };
        }
        catch (error) {
            if (error.code === 'P2025') {
                throw new common_1.HttpException('Pizza não encontrada', common_1.HttpStatus.NOT_FOUND);
            }
            throw new common_1.HttpException('Erro interno do servidor', common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    async remove(id) {
        try {
            await this.pizzasService.remove(+id);
            return {
                statusCode: 200,
                message: 'Pizza removida com sucesso',
            };
        }
        catch (error) {
            if (error.code === 'P2025') {
                throw new common_1.HttpException('Pizza não encontrada', common_1.HttpStatus.NOT_FOUND);
            }
            throw new common_1.HttpException('Erro interno do servidor', common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
};
exports.PizzasController = PizzasController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_pizza_dto_1.CreatePizzaDto]),
    __metadata("design:returntype", Promise)
], PizzasController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], PizzasController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], PizzasController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_pizza_dto_1.UpdatePizzaDto]),
    __metadata("design:returntype", Promise)
], PizzasController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], PizzasController.prototype, "remove", null);
exports.PizzasController = PizzasController = __decorate([
    (0, common_1.Controller)('pizzas'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __metadata("design:paramtypes", [pizzas_service_1.PizzasService])
], PizzasController);
//# sourceMappingURL=pizzas.controller.js.map