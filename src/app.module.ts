import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PizzasModule } from './pizzas/pizzas.module';
import { PedidosModule } from './pedidos/pedidos.module';
import { CommonModule } from './common/common.module';
import { UsersModule } from './users/users.module';
import { EntregadoresModule } from './entregadores/entregadores.module';
import { AuthModule } from './auth/auth.module';
import { ThrottlerModule } from '@nestjs/throttler';

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
    AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
