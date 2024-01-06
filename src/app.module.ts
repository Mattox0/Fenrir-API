import { Module } from '@nestjs/common';
import {ConfigModule, ConfigService} from "@nestjs/config";
import {TypeOrmModule, TypeOrmModuleAsyncOptions} from "@nestjs/typeorm";
import { ServerModule } from './server/server.module';
import {Server} from "./server/server.entity";
import {ServerJail} from "./server-jail/server_jail.entity";
import {ServerBirthday} from "./server-birthday/server_birthday.entity";
import {ServerPrivateRoom} from "./server-privateroom/server_privateroom.entity";
import {ServerStats} from "./server-stats/server_stats.entity";
import {ServerTicket} from "./server-ticket/server_ticket.entity";
import {ServerSuggest} from "./server-suggest/server_suggest.entity";
import {Hangman} from "./hangman/hangman.entity";
import {HangmanModule} from "./hangman/hangman.module";

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: [".env.local", ".env"],
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => ({
        type: "postgres",
        host: configService.get("POSTGRES_HOST"),
        port: +configService.get<number>("POSTGRES_PORT"),
        username: configService.get("POSTGRES_USER"),
        password: configService.get("POSTGRES_PASSWORD"),
        database: configService.get("POSTGRES_DATABASE"),
        entities: [
          Server,
          ServerJail,
          ServerBirthday,
          ServerPrivateRoom,
          ServerStats,
          ServerTicket,
          ServerSuggest,
          Hangman
        ],
        synchronize: true,
        extra: {
          ssl: configService.get("POSTGRES_SSL") === "true",
        },
      }),
      inject: [ConfigService],
    } as TypeOrmModuleAsyncOptions),
    ServerModule,
    HangmanModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
