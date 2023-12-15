import { Module } from '@nestjs/common';
import { ServerController } from './controller/server.controller';

@Module({
  controllers: [ServerController]
})
export class ServerModule {}
