import { Inject, Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { User } from '../model/user.model';
@Injectable()
export class UserService {
  constructor(@Inject('USER_REPOSITORY') private userRepository: typeof User) {}

  findOne(username: string, password: string) {
    return this.userRepository.findOne({ where: { username, password } });
  }

  async create(user: User) {
    const data = {
      username: user.username,
      password: await bcrypt.hash(user.password, 10),
    };
    const result = await this.userRepository.create(data);
    return {
      ...result.get(),
      password: undefined,
    };
  }
}
