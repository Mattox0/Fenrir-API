import {Module} from "@nestjs/common";
import {TypeOrmModule} from "@nestjs/typeorm";
import {Hangman} from "./hangman.entity";
import {HangmanController} from "./controller/hangman.controller";
import {HangmanService} from "./service/hangman.service";

@Module({
  imports: [TypeOrmModule.forFeature([Hangman])],
  controllers: [HangmanController],
  providers: [HangmanService],
  exports: [HangmanService],
})
export class HangmanModule {}
