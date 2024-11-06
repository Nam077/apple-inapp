import { ApiProperty } from '@nestjs/swagger';
import { IsArray, IsString } from 'class-validator';

export class GetInAppDataMultipleDto {
    @ApiProperty({
        description: 'The urls of the apps',
        example: [
            'https://apps.apple.com/us/app/paraphrase-rewording-tool/id6450775423',
            'https://apps.apple.com/vn/app/paraphrase-rewording-tool/id6450775423',
            'https://apps.apple.com/ng/app/grammar-check-spell-corrector/id6448754772',
            'https://apps.apple.com/eg-ar/app/grammar-check-spell-corrector/id6448754772',
        ],
    })
    @IsArray()
    @IsString({ each: true })
    urls: string[];
}
