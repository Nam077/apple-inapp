import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { InAppModule } from './modules/in-app/in-app.module';

@Module({
    imports: [InAppModule, InAppModule],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {}
