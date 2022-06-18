import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class JwtStategy extends PassportStrategy(Strategy, 'jwt') {
  constructor(config: ConfigService, private prisma: PrismaService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: config.get('SECRET_KEY'),
    });
  }

  async validate(payload: { sub: number; email: string; name: string }) {
    const user = await this.prisma.user.findUnique({
      where: {
        id: payload.sub,
      },
      include: {
        cart: true,
      },
    });
    delete user.password;
    return user;
  }
}
