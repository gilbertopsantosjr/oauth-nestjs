import { Controller, Post } from '@nestjs/common';

@Controller('login')
export class LoginController {
  constructor() {}

  @Post()
  execute(): string {
    return 'Hello World!';
  }
}
