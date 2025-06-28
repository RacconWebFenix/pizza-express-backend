"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PizzasModule = void 0;
const common_1 = require("@nestjs/common");
const pizzas_service_1 = require("./pizzas.service");
const pizzas_controller_1 = require("./pizzas.controller");
const prisma_module_1 = require("../prisma.module");
const upload_module_1 = require("../upload/upload.module");
let PizzasModule = class PizzasModule {
};
exports.PizzasModule = PizzasModule;
exports.PizzasModule = PizzasModule = __decorate([
    (0, common_1.Module)({
        imports: [prisma_module_1.PrismaModule, upload_module_1.UploadModule],
        controllers: [pizzas_controller_1.PizzasController],
        providers: [pizzas_service_1.PizzasService],
    })
], PizzasModule);
//# sourceMappingURL=pizzas.module.js.map