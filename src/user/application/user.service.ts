import { Inject, Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { User } from '../infrastructure/entity/user.entity';
import { CreateUserDto } from '../presenter/dto/create.user.dto';

@Injectable()
export class UserService {
  constructor(@Inject('USER_REPOSITORY') private userRepository: typeof User) {}

  findOne(username: string, password: string) {
    return this.userRepository.findOne({ where: { username, password } });
  }

  findByEmail(email: string) {
    return this.userRepository.findOne({ where: { email } });
  }

  async create(user: CreateUserDto) {
    const data = {
      username: user.username,
      password: await bcrypt.hash(user.password, 10),
      email: user.email,
    };
    const result = await this.userRepository.create(data);
    return {
      ...result.get(),
      password: undefined,
    };
  }
}
