import { Injectable } from '@nestjs/common';
import axios from 'axios';
import * as cheerio from 'cheerio';
import { QueryInApp } from './dtos/app.dto';

interface InAppPurchase {
    title: string;
    price: string;
}

export interface InAppResponse {
    url: string;
    success: boolean;
    data?: InAppPurchase[];
    error?: string;
}

@Injectable()
export class InAppService {
    async getInAppData(url: string): Promise<InAppResponse> {
        try {
            const response = await axios.get(url, {
                headers: {
                    'User-Agent':
                        'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.3',
                },
            });
            const $ = cheerio.load(response.data);

            const inAppPurchases: InAppPurchase[] = [];
            $('div.information-list__item').each((index: any, element: any) => {
                $(element)
                    .find('dd.information-list__item__definition ol.list-with-numbers li.list-with-numbers__item')
                    .each((i: any, el: any) => {
                        const title = $(el)
                            .find('span.list-with-numbers__item__title span.truncate-single-line')
                            .text()
                            .trim();
                        const price = $(el).find('span.list-with-numbers__item__price').text().trim();
                        inAppPurchases.push({ title, price });
                    });
            });

            return {
                url,
                success: true,
                data: inAppPurchases,
            };
        } catch (error) {
            return {
                url,
                success: false,
                error: `Failed to fetch in-app data: ${error.message}`,
            };
        }
    }
    async getInAppDataFromMultipleUrls(urls: string[], queryInApp: QueryInApp): Promise<InAppResponse[]> {
        const validUrls = this.filterValidUrlsFromArr(urls).map((url) => url.trim());
        const modifiedUrls = validUrls.map((url) => {
            if (queryInApp.countryCode) {
                return url.replace(
                    /https:\/\/apps\.apple\.com\/[a-z]{2}(-[a-z]{2})?\//,
                    `https://apps.apple.com/${queryInApp.countryCode}/`,
                );
            }
            return url;
        });

        const uniqueUrls = [...new Set(modifiedUrls)];

        const promises = uniqueUrls.map((url) => this.getInAppData(url));

        const data = await Promise.all(promises);

        return data;
    }

    filterValidUrls(text: string): string[] {
        const urlRegex = /https:\/\/apps\.apple\.com\/[a-z]{2}(-[a-z]{2})?\/app\/[a-z0-9\-]+\/id[0-9]+/g;
        const matches = text.match(urlRegex);
        return matches || [];
    }

    filterValidUrlsFromArr(text: string[]): string[] {
        const urlRegex = /https:\/\/apps\.apple\.com\/[a-z]{2}(-[a-z]{2})?\/app\/[a-z0-9\-]+\/id[0-9]+/g;
        const matches = text.map((url) => url.match(urlRegex)).filter(Boolean);
        return [...new Set(matches.flat())];
    }
}
