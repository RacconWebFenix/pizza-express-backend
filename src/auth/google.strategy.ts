import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy, Profile } from 'passport-google-oauth20';
import { VerifyCallback } from 'passport-google-oauth20';
import { AuthService } from './auth.service';

@Injectable()
export class GoogleStrategy extends PassportStrategy(Strategy, 'google') {
  constructor(private readonly authService: AuthService) {
    super({
      clientID: process.env.GOOGLE_CLIENT_ID || '',
      clientSecret: process.env.GOOGLE_CLIENT_SECRET || '',
      callbackURL:
        process.env.NODE_ENV === 'development'
          ? 'http://localhost:10000/auth/google/redirect'
          : process.env.GOOGLE_CALLBACK_URL || '',
      scope: ['email', 'profile'],
    });
  }

  async validate(
    accessToken: string,
    refreshToken: string,
    profile: Profile,
    done: VerifyCallback,
  ): Promise<void> {
    const email = profile.emails?.[0]?.value;
    if (!email) {
      return done(new Error('No email from Google'), false);
    }
    const nome = profile.displayName;
    const avatar = profile.photos?.[0]?.value;

    try {
      const user = await this.authService.findOrCreateGoogleUser({
        email,
        nome,
        avatar,
      });
      done(null, user);
    } catch (err) {
      done(err, false);
    }
  }
}
