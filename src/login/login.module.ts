import { Module } from '@nestjs/common';
import { AuthModule } from 'src/auth/application/auth.module';
import { LoginController } from './login.controller';

@Module({
  imports: [AuthModule],
  controllers: [LoginController],
})
export class LoginModule {}
