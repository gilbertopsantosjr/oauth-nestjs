import { Injectable } from '@nestjs/common';
import { UserService } from 'src/user/application/user.service';

@Injectable()
export class AuthService {
  constructor(private userService: UserService) {}

  async validateUser(username: string, password: string): Promise<any> {
    const user = await this.userService.findOne(username, password);
    if (user) {
      return user;
    }
    return null;
  }
}
