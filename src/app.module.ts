import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { ConfigModule } from '@nestjs/config';
import { envShcema } from './env/env';
import { EnvModule } from './env/env.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      validate: (env) => envShcema.parse(env),
      isGlobal: true,
    }),
    UserModule,
    EnvModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
