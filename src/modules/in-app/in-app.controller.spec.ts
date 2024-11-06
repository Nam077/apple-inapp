import { Test, TestingModule } from '@nestjs/testing';
import { InAppController } from './in-app.controller';
import { InAppService } from './in-app.service';

describe('InAppController', () => {
    let controller: InAppController;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            controllers: [InAppController],
            providers: [InAppService],
        }).compile();

        controller = module.get<InAppController>(InAppController);
    });

    it('should be defined', () => {
        expect(controller).toBeDefined();
    });
});
