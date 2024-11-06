import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsEnum, IsNotEmpty, IsOptional, IsString } from 'class-validator';
import { CountryEnum } from 'src/common/countries.enum';
export class IdAppDto {
    @ApiProperty({
        description: 'The id of the app',
        example: 'paraphrase-rewording-tool/id6450775423',
    })
    @IsNotEmpty()
    @IsString()
    @Type(() => String)
    id: string;

    @ApiProperty({
        description: 'The country of the app',
        example: CountryEnum.US,
        enum: CountryEnum,
    })
    @IsNotEmpty()
    @IsEnum(CountryEnum)
    country: string;
}
export class FilterUrlsDto {
    @ApiProperty({
        description: 'The text to filter',
        example: 'https://apps.apple.com/us/app/paraphrase-rewording-tool/id6450775423',
    })
    @IsString()
    text: string;
}

export class QueryInApp {
    @ApiPropertyOptional({
        description: 'The country code of the app',
        example: CountryEnum.US,
        enum: CountryEnum,
    })
    @IsOptional()
    @IsEnum(CountryEnum)
    countryCode: CountryEnum;
}
