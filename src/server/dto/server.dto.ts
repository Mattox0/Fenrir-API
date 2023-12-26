import { IsNotEmpty } from "class-validator";
export class CreatedServerDto {
  @IsNotEmpty()
  guild_id: string;

  @IsNotEmpty()
  name: string;
}
