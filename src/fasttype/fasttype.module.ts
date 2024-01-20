import {Module} from "@nestjs/common";
import {TypeOrmModule} from "@nestjs/typeorm";
import {FastType} from "./fasttype.entity";
import {FastTypeController} from "./controller/fasttype.controller";
import {FastTypeService} from "./service/fasttype.service";

@Module({
  imports: [TypeOrmModule.forFeature([FastType])],
  controllers: [FastTypeController],
  providers: [FastTypeService],
  exports: [FastTypeService],
})
export class FastTypeModule {}