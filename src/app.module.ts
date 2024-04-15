import { Module } from '@nestjs/common';
import { AuthModule } from './auth/application/auth.module';
import { UserModule } from './user/application/user.module';

@Module({
  imports: [UserModule, AuthModule],
})
export class AppModule {}
