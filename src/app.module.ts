import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { APP_FILTER } from '@nestjs/core';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PizzasModule } from './pizzas/pizzas.module';
import { PedidosModule } from './pedidos/pedidos.module';
import { CommonModule } from './common/common.module';
import { UsersModule } from './users/users.module';
import { EntregadoresModule } from './entregadores/entregadores.module';
import { AuthModule } from './auth/auth.module';
import { ThrottlerModule } from '@nestjs/throttler';
import { EnderecosModule } from './enderecos/enderecos.module';
import { PaymentsModule } from './payments/payments.module';
import { AllExceptionsFilter } from './common/filters/all-exceptions.filter';
import { CatalogModule } from './catalog/catalog.module';
import { TablesModule } from './tables/tables.module';
import { OrderItemsModule } from './order-items/order-items.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    ThrottlerModule.forRoot({
      throttlers: [
        {
          limit: 20,
          ttl: 60,
        },
      ],
    }),
    CommonModule,
    PizzasModule,
    PedidosModule,
    UsersModule,
    EntregadoresModule,
    EnderecosModule,
    AuthModule,
    PaymentsModule,
    CatalogModule, // Novo módulo de catálogo
    TablesModule, // Novo módulo de mesas
    OrderItemsModule, // Novo módulo de itens de pedido
  ],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: APP_FILTER,
      useClass: AllExceptionsFilter,
    },
  ],
})
export class AppModule {}
