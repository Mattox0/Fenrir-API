import {IsNotEmpty} from "class-validator";
import {Difficulty} from "../difficulty.enum";

export interface HangmanInterface {
  word: string,
  difficulty: Difficulty
}

export class HangmanDto {
  @IsNotEmpty()
  words: HangmanInterface[];
}