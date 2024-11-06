import { Module } from '@nestjs/common';
import { InAppService } from './in-app.service';
import { InAppController } from './in-app.controller';

@Module({
    controllers: [InAppController],
    providers: [InAppService],
})
export class InAppModule {}
