import { Module } from '@nestjs/common';
import { UserModule } from 'src/user/application/user.module';
import { UserService } from 'src/user/application/user.service';
import { AuthService } from './auth.service';

@Module({
  imports: [UserModule],
  providers: [AuthService, UserService],
})
export class AuthModule {}
