import { Module } from '@nestjs/common'
import { UserModule } from './user/user.module'
import { ConfigModule } from '@nestjs/config'
import { envShcema } from './env/env'
import { EnvModule } from './env/env.module'
import { StoreModule } from './store/store.module'
import { ProductModule } from './product/product.module'
import { DatabaseModule } from './database/database.module'

@Module({
  imports: [
    ConfigModule.forRoot({
      validate: (env) => envShcema.parse(env),
      isGlobal: true,
    }),
    UserModule,
    EnvModule,
    StoreModule,
    ProductModule,
    DatabaseModule,
  ],
  controllers: [],
  providers: [DatabaseModule],
})
export class AppModule {}
