import {Injectable} from "@nestjs/common";
import {InjectRepository} from "@nestjs/typeorm";
import {InsertResult, Repository} from "typeorm";
import {Server} from "../server.entity";
import {CreatedServerDto} from "../dto/server.dto";

@Injectable()
export class ServerService {
  constructor(
    @InjectRepository(Server)
    private serverRepository: Repository<Server>,
  ) {}

  async getServer(guild_id: string): Promise<Server> {
    return await this.serverRepository
      .createQueryBuilder("server")
      .where("server.guild_id = :id", { id: guild_id })
      .getOne();
  }

  async create(server: CreatedServerDto): Promise<InsertResult> {
    return await this.serverRepository
      .createQueryBuilder("server")
      .insert()
      .into(Server)
      .values(server)
      .orUpdate(
        ["name", "deleted"],
        ["guild_id"]
      )
      .execute();
  }

  async deleteServer(id: string): Promise<void> {
    await this.serverRepository
      .createQueryBuilder()
      .update(Server)
      .set({ deleted: true })
      .where("guild_id = :id", { id: id })
      .execute()
  }
}