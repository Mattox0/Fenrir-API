import { Module } from '@nestjs/common';
import { ServerController } from './controller/server.controller';
import {ServerService} from "./service/server.service";
import {TypeOrmModule} from "@nestjs/typeorm";
import {Server} from "./server.entity";

@Module({
  imports: [TypeOrmModule.forFeature([Server])],
  controllers: [ServerController],
  providers: [ServerService],
  exports: [ServerService],
})
export class ServerModule {}
