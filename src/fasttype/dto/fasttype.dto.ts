import {IsNotEmpty} from "class-validator";

export class FastTypeDto {
  @IsNotEmpty()
  sentences: string[];
}