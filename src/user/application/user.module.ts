import { Module } from '@nestjs/common';
import { DatabaseModule } from '../infrastructure/database/database.module';
import { User } from '../infrastructure/entity/user.entity';
import { CreateUserController } from '../presenter/create.user.controller';
import { UserService } from './user.service';

@Module({
  imports: [DatabaseModule],
  controllers: [CreateUserController],
  providers: [
    UserService,
    {
      provide: 'USER_REPOSITORY',
      useValue: User,
    },
  ],
})
export class UserModule {}
