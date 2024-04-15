import { Module } from '@nestjs/common';
import { LoginModule } from './login/login.module';
import { UserModule } from './user/application/user.module';

@Module({
  imports: [LoginModule, UserModule],
})
export class AppModule {}
