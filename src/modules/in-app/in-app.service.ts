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
    name?: string;
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
            const name = $('h1.product-header__title app-header__title').text().trim();
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
                name,
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
    getCountryCodes() {
        return [
            {
                name: 'United States',
                language: 'en-US',
                contryCode: 'us',
            },
            {
                name: 'Bahrain',
                language: 'en-BH',
                contryCode: 'bh',
            },
            {
                name: 'البحرين',
                language: 'ar-BH',
                contryCode: 'bh-ar',
            },
            {
                name: 'Botswana',
                language: 'en-BW',
                contryCode: 'bw',
            },
            {
                name: 'Cameroun',
                language: 'fr-CM',
                contryCode: 'cm',
            },
            {
                name: 'République Centrafricaine',
                language: 'fr-CF',
                contryCode: 'cf',
            },
            {
                name: "Côte d'Ivoire",
                language: 'fr-CI',
                contryCode: 'ci',
            },
            {
                name: 'Egypt',
                language: 'en-EG',
                contryCode: 'eg',
            },
            {
                name: 'مصر',
                language: 'ar-EG',
                contryCode: 'eg-ar',
            },
            {
                name: 'Guinea-Bissau',
                language: 'en-GW',
                contryCode: 'gw',
            },
            {
                name: 'Guinée',
                language: 'fr-GN',
                contryCode: 'gn',
            },
            {
                name: 'Guinée Equatoriale',
                language: 'fr-GQ',
                contryCode: 'gq',
            },
            {
                name: 'India',
                language: 'en-IN',
                contryCode: 'in',
            },
            {
                name: 'Israel',
                language: 'en-IL',
                contryCode: 'il',
            },
            {
                name: 'Jordan',
                language: 'en-JO',
                contryCode: 'jo',
            },
            {
                name: 'الأردن',
                language: 'ar-JO',
                contryCode: 'jo-ar',
            },
            {
                name: 'Kenya',
                language: 'en-KE',
                contryCode: 'ke',
            },
            {
                name: 'Kuwait',
                language: 'en-KW',
                contryCode: 'kw',
            },
            {
                name: 'الكويت',
                language: 'ar-KW',
                contryCode: 'kw-ar',
            },
            {
                name: 'Madagascar',
                language: 'en-MG',
                contryCode: 'mg',
            },
            {
                name: 'Mali',
                language: 'fr-ML',
                contryCode: 'ml',
            },
            {
                name: 'Maroc',
                language: 'fr-MA',
                contryCode: 'ma',
            },
            {
                name: 'Maurice',
                language: 'fr-MU',
                contryCode: 'mu',
            },
            {
                name: 'Mozambique',
                language: 'en-MZ',
                contryCode: 'mz',
            },
            {
                name: 'Niger',
                language: 'fr-NE',
                contryCode: 'ne',
            },
            {
                name: 'Nigeria',
                language: 'en-NG',
                contryCode: 'ng',
            },
            {
                name: 'Oman',
                language: 'en-OM',
                contryCode: 'om',
            },
            {
                name: 'عُمان',
                language: 'ar-OM',
                contryCode: 'om-ar',
            },
            {
                name: 'Qatar',
                language: 'en-QA',
                contryCode: 'qa',
            },
            {
                name: 'قطر',
                language: 'ar-QA',
                contryCode: 'qa-ar',
            },
            {
                name: 'Saudi Arabia',
                language: 'en-SA',
                contryCode: 'sa',
            },
            {
                name: 'المملكة العربية السعودية',
                language: 'ar-SA',
                contryCode: 'sa-ar',
            },
            {
                name: 'Sénégal',
                language: 'fr-SN',
                contryCode: 'sn',
            },
            {
                name: 'South Africa',
                language: 'en-ZA',
                contryCode: 'za',
            },
            {
                name: 'Tunisie',
                language: 'fr-TN',
                contryCode: 'tn',
            },
            {
                name: 'Uganda',
                language: 'en-UG',
                contryCode: 'ug',
            },
            {
                name: 'United Arab Emirates',
                language: 'en-AE',
                contryCode: 'ae',
            },
            {
                name: 'الإمارات العربية المتحدة',
                language: 'ar-AE',
                contryCode: 'ae-ar',
            },
            {
                name: 'Australia',
                language: 'en-AU',
                contryCode: 'au',
            },
            {
                name: '香港',
                language: 'zh-HK',
                contryCode: 'hk',
            },
            {
                name: 'Indonesia',
                language: 'en-ID',
                contryCode: 'id',
            },
            {
                name: '日本',
                language: 'ja-JP',
                contryCode: 'jp',
            },
            {
                name: '대한민국',
                language: 'ko-KR',
                contryCode: 'kr',
            },
            {
                name: '澳門',
                language: 'zh-MO',
                contryCode: 'mo',
            },
            {
                name: 'Malaysia',
                language: 'en-MY',
                contryCode: 'my',
            },
            {
                name: 'New Zealand',
                language: 'en-NZ',
                contryCode: 'nz',
            },
            {
                name: 'Philippines',
                language: 'en-PH',
                contryCode: 'ph',
            },
            {
                name: 'Singapore',
                language: 'en-SG',
                contryCode: 'sg',
            },
            {
                name: '台灣',
                language: 'zh-TW',
                contryCode: 'tw',
            },
            {
                name: 'ไทย',
                language: 'th-TH',
                contryCode: 'th',
            },
            {
                name: 'Việt Nam',
                language: 'vi-VN',
                contryCode: 'vn',
            },
            {
                name: 'Armenia',
                language: 'en-AM',
                contryCode: 'am',
            },
            {
                name: 'Azerbaijan',
                language: 'en-AZ',
                contryCode: 'az',
            },
            {
                name: 'Belarus',
                language: 'en-BY',
                contryCode: 'by',
            },
            {
                name: 'България',
                language: 'bg-BG',
                contryCode: 'bg',
            },
            {
                name: 'Česko',
                language: 'cs-CZ',
                contryCode: 'cz',
            },
            {
                name: 'Danmark',
                language: 'da-DK',
                contryCode: 'dk',
            },
            {
                name: 'Deutschland',
                language: 'de-DE',
                contryCode: 'de',
            },
            {
                name: 'Eesti',
                language: 'et-EE',
                contryCode: 'ee',
            },
            {
                name: 'España',
                language: 'es-ES',
                contryCode: 'es',
            },
            {
                name: 'France',
                language: 'fr-FR',
                contryCode: 'fr',
            },
            {
                name: 'Georgia',
                language: 'en-GE',
                contryCode: 'ge',
            },
            {
                name: 'Ελλάδα',
                language: 'el-GR',
                contryCode: 'gr',
            },
            {
                name: 'Hrvatska',
                language: 'hr-HR',
                contryCode: 'hr',
            },
            {
                name: 'Ireland',
                language: 'en-IE',
                contryCode: 'ie',
            },
            {
                name: 'Italia',
                language: 'it-IT',
                contryCode: 'it',
            },
            {
                name: 'Kazakhstan',
                language: 'en-KZ',
                contryCode: 'kz',
            },
            {
                name: 'Kyrgyzstan',
                language: 'en-KG',
                contryCode: 'kg',
            },
            {
                name: 'Latvija',
                language: 'lv-LV',
                contryCode: 'lv',
            },
            {
                name: 'Liechtenstein',
                language: 'de-LI',
                contryCode: 'li',
            },
            {
                name: 'Lietuva',
                language: 'lt-LT',
                contryCode: 'lt',
            },
            {
                name: 'Luxembourg',
                language: 'fr-LU',
                contryCode: 'lu',
            },
            {
                name: 'Magyarország',
                language: 'hu-HU',
                contryCode: 'hu',
            },
            {
                name: 'Malta',
                language: 'en-MT',
                contryCode: 'mt',
            },
            {
                name: 'Moldova',
                language: 'en-MD',
                contryCode: 'md',
            },
            {
                name: 'Montenegro',
                language: 'en-ME',
                contryCode: 'me',
            },
            {
                name: 'Nederland',
                language: 'nl-NL',
                contryCode: 'nl',
            },
            {
                name: 'North Macedonia',
                language: 'en-MK',
                contryCode: 'mk',
            },
            {
                name: 'Norge',
                language: 'no-NO',
                contryCode: 'no',
            },
            {
                name: 'Österreich',
                language: 'de-AT',
                contryCode: 'at',
            },
            {
                name: 'Polska',
                language: 'pl-PL',
                contryCode: 'pl',
            },
            {
                name: 'Portugal',
                language: 'pt-PT',
                contryCode: 'pt',
            },
            {
                name: 'România',
                language: 'ro-RO',
                contryCode: 'ro',
            },
            {
                name: 'Slovensko',
                language: 'sk-SK',
                contryCode: 'sk',
            },
            {
                name: 'Slovenia',
                language: 'en-SI',
                contryCode: 'si',
            },
            {
                name: 'Suomi',
                language: 'fi-FI',
                contryCode: 'fi',
            },
            {
                name: 'Sverige',
                language: 'sv-SE',
                contryCode: 'se',
            },
            {
                name: 'Tajikistan',
                language: 'en-TJ',
                contryCode: 'tj',
            },
            {
                name: 'Türkiye',
                language: 'tr-TR',
                contryCode: 'tr',
            },
            {
                name: 'Turkmenistan',
                language: 'en-TM',
                contryCode: 'tm',
            },
            {
                name: 'United Kingdom',
                language: 'en-GB',
                contryCode: 'uk',
            },
            {
                name: 'Україна',
                language: 'uk-UA',
                contryCode: 'ua',
            },
            {
                name: 'Uzbekistan',
                language: 'en-UZ',
                contryCode: 'uz',
            },
            {
                name: 'Anguilla',
                language: 'en-AI',
                contryCode: 'lae',
            },
            {
                name: 'Antigua & Barbuda',
                language: 'en-AG',
                contryCode: 'lae',
            },
            {
                name: 'Argentina',
                language: 'es-AR',
                contryCode: 'la',
            },
            {
                name: 'Barbados',
                language: 'en-BB',
                contryCode: 'lae',
            },
            {
                name: 'Belize',
                language: 'en-BZ',
                contryCode: 'lae',
            },
            {
                name: 'Bermuda',
                language: 'en-BM',
                contryCode: 'lae',
            },
            {
                name: 'Bolivia',
                language: 'es-BO',
                contryCode: 'la',
            },
            {
                name: 'Brasil',
                language: 'pt-BR',
                contryCode: 'br',
            },
            {
                name: 'British Virgin Islands',
                language: 'en-VG',
                contryCode: 'lae',
            },
            {
                name: 'Cayman Islands',
                language: 'en-KY',
                contryCode: 'lae',
            },
            {
                name: 'Chile',
                language: 'es-CL',
                contryCode: 'cl',
            },
            {
                name: 'Colombia',
                language: 'es-CO',
                contryCode: 'co',
            },
            {
                name: 'Costa Rica',
                language: 'es-CR',
                contryCode: 'la',
            },
            {
                name: 'Dominica',
                language: 'en-DM',
                contryCode: 'lae',
            },
            {
                name: 'República Dominicana',
                language: 'es-DO',
                contryCode: 'la',
            },
            {
                name: 'Ecuador',
                language: 'es-EC',
                contryCode: 'la',
            },
            {
                name: 'El Salvador',
                language: 'es-SV',
                contryCode: 'la',
            },
            {
                name: 'Grenada',
                language: 'en-GD',
                contryCode: 'lae',
            },
            {
                name: 'Guatemala',
                language: 'es-GT',
                contryCode: 'la',
            },
            {
                name: 'Guyana',
                language: 'en-GY',
                contryCode: 'lae',
            },
            {
                name: 'Honduras',
                language: 'es-HN',
                contryCode: 'la',
            },
            {
                name: 'Jamaica',
                language: 'en-JM',
                contryCode: 'lae',
            },
            {
                name: 'México',
                language: 'es-MX',
                contryCode: 'mx',
            },
            {
                name: 'Montserrat',
                language: 'en-MS',
                contryCode: 'lae',
            },
            {
                name: 'Nicaragua',
                language: 'es-NI',
                contryCode: 'la',
            },
            {
                name: 'Panamá',
                language: 'es-PA',
                contryCode: 'la',
            },
            {
                name: 'Paraguay',
                language: 'es-PY',
                contryCode: 'la',
            },
            {
                name: 'Perú',
                language: 'es-PE',
                contryCode: 'la',
            },
            {
                name: 'St. Kitts & Nevis',
                language: 'en-KN',
                contryCode: 'lae',
            },
            {
                name: 'St. Lucia',
                language: 'en-LC',
                contryCode: 'lae',
            },
            {
                name: 'St. Vincent & The Grenadines',
                language: 'en-VC',
                contryCode: 'lae',
            },
            {
                name: 'Suriname',
                language: 'en-SR',
                contryCode: 'lae',
            },
            {
                name: 'The Bahamas',
                language: 'en-BS',
                contryCode: 'lae',
            },
            {
                name: 'Trinidad & Tobago',
                language: 'en-TT',
                contryCode: 'lae',
            },
            {
                name: 'Turks & Caicos',
                language: 'en-TC',
                contryCode: 'lae',
            },
            {
                name: 'Uruguay',
                language: 'es-UY',
                contryCode: 'la',
            },
            {
                name: 'Venezuela',
                language: 'es-VE',
                contryCode: 'la',
            },
            {
                name: 'América Latina y el Caribe (Español)',
                language: 'es-419',
                contryCode: 'la',
            },
            {
                name: 'Latin America and the Caribbean (English)',
                language: 'en-419',
                contryCode: 'lae',
            },
            {
                name: 'Canada (English)',
                language: 'en-CA',
                contryCode: 'ca',
            },
        ];
    }
}
