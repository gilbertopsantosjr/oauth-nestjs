import { Body, Controller, Post } from '@nestjs/common';
import { UserService } from '../application/user.service';
import { CreateUserDto } from './dto/create.user.dto';

@Controller('user')
export class CreateUserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return this.userService.create(createUserDto);
  }
}
