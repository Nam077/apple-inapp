import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { InAppResponse, InAppService } from './in-app.service';
import { GetInAppDataMultipleDto } from './get-in-app-data.dto';
import { FilterUrlsDto, QueryInApp } from './dtos/app.dto';

@Controller('in-app')
export class InAppController {
    constructor(private readonly inAppService: InAppService) {}

    @Get('country-codes')
    getCountryCodes() {
        return this.inAppService.getCountryCodes();
    }

    @Post('multiple')
    async getInAppDataFromMultipleUrls(
        @Query() queryInApp: QueryInApp,
        @Body() body: GetInAppDataMultipleDto,
    ): Promise<InAppResponse[]> {
        const { urls } = body;
        return await this.inAppService.getInAppDataFromMultipleUrls(urls, queryInApp);
    }

    @Post('filter-urls')
    async filterUrls(@Body() body: FilterUrlsDto): Promise<string[]> {
        const { text } = body;
        return this.inAppService.filterValidUrls(text);
    }
}
