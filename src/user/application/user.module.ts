import { Module } from '@nestjs/common';
import { User } from '../model/user.model';

@Module({
  providers: [
    {
      provide: 'USER_REPOSITORY',
      useValue: User,
    },
  ],
})
export class UserModule {}
