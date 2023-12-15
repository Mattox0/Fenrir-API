import {Controller, Get} from '@nestjs/common';

@Controller('server')
export class ServerController {
    @Get()
    getServer(): string {
        return 'Hello World!';
    }
}
