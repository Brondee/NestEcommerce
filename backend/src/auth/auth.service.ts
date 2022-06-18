import { ForbiddenException, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateUserDto, LoginDto } from './dto';
import * as argon from 'argon2';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime';
import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AuthService {
  constructor(
    private prisma: PrismaService,
    private jwt: JwtService,
    private config: ConfigService,
  ) {}

  async signup(dto: CreateUserDto) {
    const hash = await argon.hash(dto.password);

    try {
      const user = await this.prisma.user.create({
        data: {
          email: dto.email,
          name: dto.name,
          password: hash,
        },
      });
      await this.prisma.cart.create({
        data: {
          userId: user.id,
        },
      });

      const tokens = await this.signToken(user.id, user.email, user.name);
      await this.updateRefreshTokenHash(user.id, tokens.refresh_token);
      return tokens;
    } catch (error) {
      if (error instanceof PrismaClientKnownRequestError) {
        if (error.code === 'P2002') {
          throw new ForbiddenException('Credentials taken');
        }
      }
      throw error;
    }
  }

  async login(dto: LoginDto) {
    const user = await this.prisma.user.findUnique({
      where: {
        email: dto.email,
      },
    });

    if (!user) throw new ForbiddenException('cant find user');

    const pwMatches = await argon.verify(user.password, dto.password);

    if (!pwMatches) throw new ForbiddenException('credentials incorrect');

    const tokens = await this.signToken(user.id, user.email, user.name);
    await this.updateRefreshTokenHash(user.id, tokens.refresh_token);
    return tokens;
  }

  async logout(userId: number) {
    await this.prisma.user.updateMany({
      where: {
        id: userId,
        rtHash: {
          not: null,
        },
      },
      data: {
        rtHash: null,
      },
    });
  }

  async refreshTokens(userId: number, refreshToken: string) {
    const user = await this.prisma.user.findUnique({
      where: {
        id: userId,
      },
    });
    if (!user) throw new ForbiddenException('Cant find user');

    const rtMatches = await argon.verify(user.rtHash, refreshToken);
    if (!rtMatches) throw new ForbiddenException('Access Denied');

    const tokens = await this.signToken(user.id, user.email, user.name);
    await this.updateRefreshTokenHash(user.id, tokens.refresh_token);
    return tokens;
  }

  async updateRefreshTokenHash(userId: number, refreshToken: string) {
    const hash = await argon.hash(refreshToken);
    await this.prisma.user.update({
      where: {
        id: userId,
      },
      data: {
        rtHash: hash,
      },
    });
  }

  async signToken(
    userId: number,
    email: string,
    name: string,
  ): Promise<{ access_token: string; refresh_token: string }> {
    const payload = {
      sub: userId,
      email,
      name,
    };
    const secret = this.config.get('SECRET_KEY');
    const refreshKey = this.config.get('REFRESH_KEY');

    const access_token = await this.jwt.signAsync(payload, {
      expiresIn: '15m',
      secret,
    });

    const refresh_token = await this.jwt.signAsync(payload, {
      expiresIn: '7d',
      secret: refreshKey,
    });

    return {
      access_token,
      refresh_token,
    };
  }
}
