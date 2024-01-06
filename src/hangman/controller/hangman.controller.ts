import {Body, Controller, Get, Param, Post, UsePipes, ValidationPipe} from "@nestjs/common";
import {HangmanService} from "../service/hangman.service";
import {HangmanDto} from "../dto/hangman.dto";
import {Difficulty} from "../difficulty.enum";

@Controller('hangman')
export class HangmanController {

    constructor(private readonly hangmanService: HangmanService) {}

    @UsePipes(ValidationPipe)
    @Post()
    async createHangman(@Body() body: HangmanDto) {
        for (let hangman of body.words) {
            hangman.word = hangman.word.toLowerCase();
            await this.hangmanService.create(hangman);
        }
        return {message: "Successfully created hangman words."};
    }

    @UsePipes(ValidationPipe)
    @Get('random/:difficulty')
    async getRandomHangman(@Param('difficulty') difficulty: Difficulty) {
        return await this.hangmanService.getRandom(difficulty);
    }

}