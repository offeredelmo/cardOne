import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { DeckModule } from './deck/deck.module';
import { CardModule } from './card/card.module';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './auth/auth.module';


@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST,
      port: +process.env.DB_PORT,
      database: process.env.DB_NAME,
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      autoLoadEntities: true,
      synchronize: true, //en produccion se deja en falso
    }),
    UserModule, 
    DeckModule, 
    CardModule,
    AuthModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
