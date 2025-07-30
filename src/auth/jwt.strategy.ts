import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';

interface JwtPayload {
  sub: number;
  email: string;
}

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor() {
    console.log('JWT Strategy initialized');
    const secret = process.env.JWT_SECRET || 'pizza-secret';
    console.log('[JwtStrategy] JWT_SECRET usado:', secret);
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: secret,
    });
  }

  validate(payload: JwtPayload) {
    console.log('[JwtStrategy] Payload JWT recebido:', payload);
    if (!payload.sub || !payload.email) {
      console.error(
        '[JwtStrategy] Token inválido: payload incompleto',
        payload,
      );
      throw new Error('Token inválido: payload incompleto');
    }
    return { userId: payload.sub, email: payload.email };
  }
}
