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
Object.defineProperty(exports, "__esModule", { value: true });
exports.EntregadoresService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma.service");
let EntregadoresService = class EntregadoresService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    create(createEntregadoreDto) {
        return this.prisma.entregador.create({ data: createEntregadoreDto });
    }
    findAll() {
        return this.prisma.entregador.findMany();
    }
    findOne(id) {
        return this.prisma.entregador.findUnique({ where: { id } });
    }
    update(id, updateEntregadoreDto) {
        return this.prisma.entregador.update({
            where: { id },
            data: updateEntregadoreDto,
        });
    }
    remove(id) {
        return this.prisma.entregador.delete({ where: { id } });
    }
};
exports.EntregadoresService = EntregadoresService;
exports.EntregadoresService = EntregadoresService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], EntregadoresService);
//# sourceMappingURL=entregadores.service.js.map