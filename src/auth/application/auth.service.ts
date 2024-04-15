import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { UserService } from 'src/user/application/user.service';
import { User } from 'src/user/infrastructure/entity/user.entity';
import { UserPayload } from '../model/user.payload';
import { UserToken } from '../model/user.token';
import { LoginDto } from '../presenter/dto/login.request.dto';

@Injectable()
export class AuthService {
  constructor(
    private readonly jwtService: JwtService,
    private readonly userService: UserService,
  ) {}

  async login(dto: LoginDto): Promise<UserToken> {
    const user = await this.validateUser(dto.email, dto.password);
    if (!user) {
      return null;
    }

    const payload: UserPayload = {
      sub: user.id,
      email: user.email,
      name: user.username,
    };

    return {
      access_token: this.jwtService.sign(payload),
    };
  }

  async validateUser(email: string, password: string): Promise<User> {
    const user = await this.userService.findByEmail(email);

    if (user) {
      const isPasswordValid = await bcrypt.compare(password, user.password);

      if (isPasswordValid) {
        return {
          ...user.dataValues,
          password: undefined,
        } as User;
      }
    }

    throw new Error('Email address or password provided is incorrect.');
  }
}
