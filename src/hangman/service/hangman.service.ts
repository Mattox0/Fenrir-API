import {Injectable} from "@nestjs/common";
import {InjectRepository} from "@nestjs/typeorm";
import {Repository} from "typeorm";
import {Hangman} from "../hangman.entity";
import {Difficulty} from "../difficulty.enum";
import {HangmanInterface} from "../dto/hangman.dto";

@Injectable()
export class HangmanService {

  constructor(
    @InjectRepository(Hangman)
    private hangmanRepository: Repository<Hangman>,
  ) {}

  async create(hangman: HangmanInterface): Promise<void> {
    await this.hangmanRepository
      .createQueryBuilder("hangman")
      .insert()
      .into(Hangman)
      .values(hangman)
      .execute();
  }

  async getRandom(difficulty: Difficulty): Promise<Hangman> {
    return await this.hangmanRepository
      .createQueryBuilder("hangman")
      .select(["hangman.word"])
      .where("hangman.difficulty = :difficulty", { difficulty })
      .orderBy("RANDOM()")
      .limit(1)
      .getOne();
  }
}