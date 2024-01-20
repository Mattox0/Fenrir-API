import {Body, Controller, Delete, Get, Param, Post, UsePipes, ValidationPipe} from "@nestjs/common";
import {FastTypeService} from "../service/fasttype.service";
import {FastTypeDto} from "../dto/fasttype.dto";

@Controller('fast-type')
export class FastTypeController {

    constructor(private readonly fastTypeService: FastTypeService) {}

    @UsePipes(ValidationPipe)
    @Post()
    async createHangman(@Body() body: FastTypeDto) {
        for (let sentence of body.sentences) {
            sentence = sentence.toLowerCase();
            await this.fastTypeService.create(sentence);
        }
        return {message: "Successfully created fast type sentences."};
    }

    @Get('random')
    async getRandomHangman() {
        return await this.fastTypeService.getRandom();
    }

    @Get()
    async getAll() {
        return await this.fastTypeService.getAll();
    }

    @Delete('/:id')
    async delete(@Param('id') id: number) {
        return await this.fastTypeService.delete(id);
    }
}