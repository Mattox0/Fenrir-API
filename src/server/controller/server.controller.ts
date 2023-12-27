import {Body, Controller, Delete, Get, Param, Post, UsePipes, ValidationPipe} from '@nestjs/common';
import {ServerService} from "../service/server.service";
import {Server} from "../server.entity";
import {CreatedServerDto} from "../dto/server.dto";
import {InsertResult} from "typeorm";

@Controller('server')
export class ServerController {

    constructor(private readonly serverService: ServerService) {}

    @UsePipes(ValidationPipe)
    @Post()
    async createServer(@Body() body: CreatedServerDto): Promise<InsertResult> {
        return await this.serverService.create(body);
    }

    @UsePipes(ValidationPipe)
    @Get()
    async getServer(@Body() body: CreatedServerDto): Promise<Server> {
        return await this.serverService.getServer(body.guild_id);
    }

    @Delete("/:id")
    async deleteServer(@Param("id") id: string): Promise<void> {
        return await this.serverService.deleteServer(id);
    }
}
