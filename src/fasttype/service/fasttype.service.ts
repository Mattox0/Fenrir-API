import {Injectable} from "@nestjs/common";
import {InjectRepository} from "@nestjs/typeorm";
import {Repository} from "typeorm";
import {FastType} from "../fasttype.entity";

@Injectable()
export class FastTypeService {

    constructor(
      @InjectRepository(FastType)
      private fastTypeRepository: Repository<FastType>,
    ) {}

  async create(sentence: string): Promise<void> {
    await this.fastTypeRepository
      .createQueryBuilder("fast_type")
      .insert()
      .into(FastType)
      .values({sentence:sentence})
      .execute();
  }

  async getRandom(): Promise<FastType> {
    return await this.fastTypeRepository
      .createQueryBuilder("fast_type")
      .select(["fast_type.sentence"])
      .orderBy("RANDOM()")
      .limit(1)
      .getOne();
  }

  async getAll(): Promise<FastType[]> {
    return await this.fastTypeRepository
      .createQueryBuilder("fast_type")
      .select(["fast_type.sentence"])
      .getMany();
  }

  async delete(id: number): Promise<void> {
    await this.fastTypeRepository
      .createQueryBuilder("fast_type")
      .delete()
      .where("fast_type.id = :id", { id: id })
      .execute();
  }
}