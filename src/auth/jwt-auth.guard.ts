import { Injectable } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ExecutionContext } from '@nestjs/common/interfaces';

@Injectable()
export class JwtAuthGuard extends AuthGuard('jwt') {
  canActivate(context: ExecutionContext) {
    const req = context.switchToHttp().getRequest();
    console.log(
      '[JwtAuthGuard][ANTES] Authorization:',
      req.headers['authorization'],
    );
    const result = super.canActivate(context);
    console.log('[JwtAuthGuard][DEPOIS] Resultado do canActivate:', result);
    return result;
  }
}
