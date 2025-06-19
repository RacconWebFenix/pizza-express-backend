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
exports.PedidosService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma.service");
let PedidosService = class PedidosService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(createPedidoDto) {
        const { clienteId, pizzasIds, status, entregadorId } = createPedidoDto;
        return this.prisma.pedido.create({
            data: {
                cliente: { connect: { id: clienteId } },
                pizzas: { connect: pizzasIds.map((id) => ({ id })) },
                status,
                entregador: entregadorId
                    ? { connect: { id: entregadorId } }
                    : undefined,
            },
        });
    }
    findAll() {
        return this.prisma.pedido.findMany({
            include: { cliente: true, pizzas: true, entregador: true },
        });
    }
    findOne(id) {
        return this.prisma.pedido.findUnique({
            where: { id },
            include: { cliente: true, pizzas: true, entregador: true },
        });
    }
    async update(id, updatePedidoDto) {
        const { clienteId, pizzasIds, status, entregadorId, latitude, longitude } = updatePedidoDto;
        return this.prisma.pedido.update({
            where: { id },
            data: {
                cliente: clienteId ? { connect: { id: clienteId } } : undefined,
                pizzas: pizzasIds
                    ? { set: pizzasIds.map((id) => ({ id })) }
                    : undefined,
                status,
                entregador: entregadorId
                    ? { connect: { id: entregadorId } }
                    : undefined,
                latitude,
                longitude,
            },
        });
    }
    remove(id) {
        return this.prisma.pedido.delete({ where: { id } });
    }
};
exports.PedidosService = PedidosService;
exports.PedidosService = PedidosService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], PedidosService);
//# sourceMappingURL=pedidos.service.js.map