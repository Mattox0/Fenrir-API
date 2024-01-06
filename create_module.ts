import * as fs from 'fs';

if (process.argv.length < 3) {
    console.log('Please provide a name for the module');
    process.exit(1);
}

const moduleName: string = process.argv[2];
const modulePath: string = `./src/${moduleName}`;

if (fs.existsSync(modulePath)) {
    console.log(`Module ${moduleName} already exists`);
    process.exit(1);
}

const controllerTemplate: string = `import {Controller} from "@nestjs/common";
import {${capitalize(moduleName)}Service} from "../service/${moduleName}.service";

@Controller('${moduleName}')
export class ${capitalize(moduleName)}Controller {

    constructor(private readonly ${moduleName}Service: ${capitalize(moduleName)}Service) {}

}`;

const dtoTemplate: string = `export class ${capitalize(moduleName)}Dto {

}`;

const serviceTemplate: string = `import {Injectable} from "@nestjs/common";
import {InjectRepository} from "@nestjs/typeorm";
import {Repository} from "typeorm";
import {${capitalize(moduleName)}} from "../${moduleName}.entity";

@Injectable()
export class ${capitalize(moduleName)}Service {

    constructor(
      @InjectRepository(${capitalize(moduleName)})
      private ${moduleName}Repository: Repository<${capitalize(moduleName)}>,
    ) {}

}`;

const entityTemplate: string = `import {Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity()
export class ${capitalize(moduleName)} {
  @PrimaryGeneratedColumn("uuid")
  id: string;
}`;

const moduleTemplate: string = `import {Module} from "@nestjs/common";
import {TypeOrmModule} from "@nestjs/typeorm";
import {${capitalize(moduleName)}} from "./${moduleName}.entity";
import {${capitalize(moduleName)}Controller} from "./controller/${moduleName}.controller";
import {${capitalize(moduleName)}Service} from "./service/${moduleName}.service";

@Module({
  imports: [TypeOrmModule.forFeature([${capitalize(moduleName)}])],
  controllers: [${capitalize(moduleName)}Controller],
  providers: [${capitalize(moduleName)}Service],
  exports: [${capitalize(moduleName)}Service],
})
export class ${capitalize(moduleName)}Module {}`;

fs.mkdirSync(modulePath);
fs.mkdirSync(`${modulePath}/controller`);
fs.mkdirSync(`${modulePath}/dto`);
fs.mkdirSync(`${modulePath}/service`);
fs.writeFileSync(`${modulePath}/controller/${moduleName}.controller.ts`, controllerTemplate);
fs.writeFileSync(`${modulePath}/dto/${moduleName}.dto.ts`, dtoTemplate);
fs.writeFileSync(`${modulePath}/service/${moduleName}.service.ts`, serviceTemplate);
fs.writeFileSync(`${modulePath}/${moduleName}.entity.ts`, entityTemplate);
fs.writeFileSync(`${modulePath}/${moduleName}.module.ts`, moduleTemplate);

function capitalize(str: string): string {
    return str.charAt(0).toUpperCase() + str.slice(1);
}