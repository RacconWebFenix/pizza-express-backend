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
exports.AuthController = void 0;
const common_1 = require("@nestjs/common");
const auth_service_1 = require("./auth.service");
const create_cliente_dto_1 = require("../clientes/dto/create-cliente.dto");
const swagger_1 = require("@nestjs/swagger");
let AuthController = class AuthController {
    authService;
    constructor(authService) {
        this.authService = authService;
    }
    async login(body) {
        const user = await this.authService.validateUser(body.email, body.password);
        if (!user)
            throw new common_1.UnauthorizedException('Credenciais inválidas');
        return this.authService.login(user);
    }
    async register(createClienteDto) {
        try {
            return await this.authService.register(createClienteDto);
        }
        catch (err) {
            if (typeof err === 'object' &&
                err &&
                'code' in err &&
                err.code === 'P2002') {
                throw new common_1.ConflictException('Email já cadastrado');
            }
            if (err instanceof common_1.BadRequestException ||
                err instanceof common_1.ConflictException) {
                throw err;
            }
            console.error('Erro no registro:', err);
            let message = 'Erro ao registrar cliente';
            if (typeof err === 'object' &&
                err &&
                'message' in err &&
                typeof err.message === 'string') {
                message = String(err.message);
            }
            throw new common_1.BadRequestException(message);
        }
    }
};
exports.AuthController = AuthController;
__decorate([
    (0, common_1.Post)('login'),
    (0, swagger_1.ApiOperation)({ summary: 'Login do cliente (JWT)' }),
    (0, swagger_1.ApiBody)({
        schema: {
            example: { email: 'joao@mail.com', password: '123456' },
        },
    }),
    (0, swagger_1.ApiResponse)({ status: 201, description: 'JWT gerado com sucesso' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "login", null);
__decorate([
    (0, common_1.Post)('register'),
    (0, swagger_1.ApiOperation)({ summary: 'Registrar novo cliente' }),
    (0, swagger_1.ApiBody)({
        schema: {
            example: {
                nome: 'João Silva',
                email: 'joao@mail.com',
                password: '123456',
                telefone: '11999999999',
                endereco: 'Rua das Flores, 123',
            },
        },
    }),
    (0, swagger_1.ApiResponse)({ status: 201, description: 'Cliente registrado com sucesso' }),
    __param(0, (0, common_1.Body)(new common_1.ValidationPipe({ whitelist: true, transform: true }))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_cliente_dto_1.CreateClienteDto]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "register", null);
exports.AuthController = AuthController = __decorate([
    (0, swagger_1.ApiTags)('Auth'),
    (0, common_1.Controller)('auth'),
    __metadata("design:paramtypes", [auth_service_1.AuthService])
], AuthController);
//# sourceMappingURL=auth.controller.js.map