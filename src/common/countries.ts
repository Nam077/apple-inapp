import { log } from 'console';

export const countries = [
    {
        name: 'United States',
        language: 'en-US',
        countryCode: 'us',
    },
    {
        name: 'Bahrain',
        language: 'en-BH',
        countryCode: 'bh',
    },
    {
        name: 'البحرين',
        language: 'ar-BH',
        countryCode: 'bh-ar',
    },
    {
        name: 'Botswana',
        language: 'en-BW',
        countryCode: 'bw',
    },
    {
        name: 'Cameroun',
        language: 'fr-CM',
        countryCode: 'cm',
    },
    {
        name: 'République Centrafricaine',
        language: 'fr-CF',
        countryCode: 'cf',
    },
    {
        name: "Côte d'Ivoire",
        language: 'fr-CI',
        countryCode: 'ci',
    },
    {
        name: 'Egypt',
        language: 'en-EG',
        countryCode: 'eg',
    },
    {
        name: 'مصر',
        language: 'ar-EG',
        countryCode: 'eg-ar',
    },
    {
        name: 'Guinea-Bissau',
        language: 'en-GW',
        countryCode: 'gw',
    },
    {
        name: 'Guinée',
        language: 'fr-GN',
        countryCode: 'gn',
    },
    {
        name: 'Guinée Equatoriale',
        language: 'fr-GQ',
        countryCode: 'gq',
    },
    {
        name: 'India',
        language: 'en-IN',
        countryCode: 'in',
    },
    {
        name: 'Israel',
        language: 'en-IL',
        countryCode: 'il',
    },
    {
        name: 'Jordan',
        language: 'en-JO',
        countryCode: 'jo',
    },
    {
        name: 'الأردن',
        language: 'ar-JO',
        countryCode: 'jo-ar',
    },
    {
        name: 'Kenya',
        language: 'en-KE',
        countryCode: 'ke',
    },
    {
        name: 'Kuwait',
        language: 'en-KW',
        countryCode: 'kw',
    },
    {
        name: 'الكويت',
        language: 'ar-KW',
        countryCode: 'kw-ar',
    },
    {
        name: 'Madagascar',
        language: 'en-MG',
        countryCode: 'mg',
    },
    {
        name: 'Mali',
        language: 'fr-ML',
        countryCode: 'ml',
    },
    {
        name: 'Maroc',
        language: 'fr-MA',
        countryCode: 'ma',
    },
    {
        name: 'Maurice',
        language: 'fr-MU',
        countryCode: 'mu',
    },
    {
        name: 'Mozambique',
        language: 'en-MZ',
        countryCode: 'mz',
    },
    {
        name: 'Niger',
        language: 'fr-NE',
        countryCode: 'ne',
    },
    {
        name: 'Nigeria',
        language: 'en-NG',
        countryCode: 'ng',
    },
    {
        name: 'Oman',
        language: 'en-OM',
        countryCode: 'om',
    },
    {
        name: 'عُمان',
        language: 'ar-OM',
        countryCode: 'om-ar',
    },
    {
        name: 'Qatar',
        language: 'en-QA',
        countryCode: 'qa',
    },
    {
        name: 'قطر',
        language: 'ar-QA',
        countryCode: 'qa-ar',
    },
    {
        name: 'Saudi Arabia',
        language: 'en-SA',
        countryCode: 'sa',
    },
    {
        name: 'المملكة العربية السعودية',
        language: 'ar-SA',
        countryCode: 'sa-ar',
    },
    {
        name: 'Sénégal',
        language: 'fr-SN',
        countryCode: 'sn',
    },
    {
        name: 'South Africa',
        language: 'en-ZA',
        countryCode: 'za',
    },
    {
        name: 'Tunisie',
        language: 'fr-TN',
        countryCode: 'tn',
    },
    {
        name: 'Uganda',
        language: 'en-UG',
        countryCode: 'ug',
    },
    {
        name: 'United Arab Emirates',
        language: 'en-AE',
        countryCode: 'ae',
    },
    {
        name: 'الإمارات العربية المتحدة',
        language: 'ar-AE',
        countryCode: 'ae-ar',
    },
    {
        name: 'Australia',
        language: 'en-AU',
        countryCode: 'au',
    },
    {
        name: '香港',
        language: 'zh-HK',
        countryCode: 'hk',
    },
    {
        name: 'Indonesia',
        language: 'en-ID',
        countryCode: 'id',
    },
    {
        name: '日本',
        language: 'ja-JP',
        countryCode: 'jp',
    },
    {
        name: '대한민국',
        language: 'ko-KR',
        countryCode: 'kr',
    },
    {
        name: '澳門',
        language: 'zh-MO',
        countryCode: 'mo',
    },
    {
        name: 'Malaysia',
        language: 'en-MY',
        countryCode: 'my',
    },
    {
        name: 'New Zealand',
        language: 'en-NZ',
        countryCode: 'nz',
    },
    {
        name: 'Philippines',
        language: 'en-PH',
        countryCode: 'ph',
    },
    {
        name: 'Singapore',
        language: 'en-SG',
        countryCode: 'sg',
    },
    {
        name: '台灣',
        language: 'zh-TW',
        countryCode: 'tw',
    },
    {
        name: 'ไทย',
        language: 'th-TH',
        countryCode: 'th',
    },
    {
        name: 'Việt Nam',
        language: 'vi-VN',
        countryCode: 'vn',
    },
    {
        name: 'Armenia',
        language: 'en-AM',
        countryCode: 'am',
    },
    {
        name: 'Azerbaijan',
        language: 'en-AZ',
        countryCode: 'az',
    },
    {
        name: 'Belarus',
        language: 'en-BY',
        countryCode: 'by',
    },
    {
        name: 'България',
        language: 'bg-BG',
        countryCode: 'bg',
    },
    {
        name: 'Česko',
        language: 'cs-CZ',
        countryCode: 'cz',
    },
    {
        name: 'Danmark',
        language: 'da-DK',
        countryCode: 'dk',
    },
    {
        name: 'Deutschland',
        language: 'de-DE',
        countryCode: 'de',
    },
    {
        name: 'Eesti',
        language: 'et-EE',
        countryCode: 'ee',
    },
    {
        name: 'España',
        language: 'es-ES',
        countryCode: 'es',
    },
    {
        name: 'France',
        language: 'fr-FR',
        countryCode: 'fr',
    },
    {
        name: 'Georgia',
        language: 'en-GE',
        countryCode: 'ge',
    },
    {
        name: 'Ελλάδα',
        language: 'el-GR',
        countryCode: 'gr',
    },
    {
        name: 'Hrvatska',
        language: 'hr-HR',
        countryCode: 'hr',
    },
    {
        name: 'Ireland',
        language: 'en-IE',
        countryCode: 'ie',
    },
    {
        name: 'Italia',
        language: 'it-IT',
        countryCode: 'it',
    },
    {
        name: 'Kazakhstan',
        language: 'en-KZ',
        countryCode: 'kz',
    },
    {
        name: 'Kyrgyzstan',
        language: 'en-KG',
        countryCode: 'kg',
    },
    {
        name: 'Latvija',
        language: 'lv-LV',
        countryCode: 'lv',
    },
    {
        name: 'Liechtenstein',
        language: 'de-LI',
        countryCode: 'li',
    },
    {
        name: 'Lietuva',
        language: 'lt-LT',
        countryCode: 'lt',
    },
    {
        name: 'Luxembourg',
        language: 'fr-LU',
        countryCode: 'lu',
    },
    {
        name: 'Magyarország',
        language: 'hu-HU',
        countryCode: 'hu',
    },
    {
        name: 'Malta',
        language: 'en-MT',
        countryCode: 'mt',
    },
    {
        name: 'Moldova',
        language: 'en-MD',
        countryCode: 'md',
    },
    {
        name: 'Montenegro',
        language: 'en-ME',
        countryCode: 'me',
    },
    {
        name: 'Nederland',
        language: 'nl-NL',
        countryCode: 'nl',
    },
    {
        name: 'North Macedonia',
        language: 'en-MK',
        countryCode: 'mk',
    },
    {
        name: 'Norge',
        language: 'no-NO',
        countryCode: 'no',
    },
    {
        name: 'Österreich',
        language: 'de-AT',
        countryCode: 'at',
    },
    {
        name: 'Polska',
        language: 'pl-PL',
        countryCode: 'pl',
    },
    {
        name: 'Portugal',
        language: 'pt-PT',
        countryCode: 'pt',
    },
    {
        name: 'România',
        language: 'ro-RO',
        countryCode: 'ro',
    },
    {
        name: 'Slovensko',
        language: 'sk-SK',
        countryCode: 'sk',
    },
    {
        name: 'Slovenia',
        language: 'en-SI',
        countryCode: 'si',
    },
    {
        name: 'Suomi',
        language: 'fi-FI',
        countryCode: 'fi',
    },
    {
        name: 'Sverige',
        language: 'sv-SE',
        countryCode: 'se',
    },
    {
        name: 'Tajikistan',
        language: 'en-TJ',
        countryCode: 'tj',
    },
    {
        name: 'Türkiye',
        language: 'tr-TR',
        countryCode: 'tr',
    },
    {
        name: 'Turkmenistan',
        language: 'en-TM',
        countryCode: 'tm',
    },
    {
        name: 'United Kingdom',
        language: 'en-GB',
        countryCode: 'uk',
    },
    {
        name: 'Україна',
        language: 'uk-UA',
        countryCode: 'ua',
    },
    {
        name: 'Uzbekistan',
        language: 'en-UZ',
        countryCode: 'uz',
    },
    {
        name: 'Anguilla',
        language: 'en-AI',
        countryCode: 'lae',
    },
    {
        name: 'Antigua & Barbuda',
        language: 'en-AG',
        countryCode: 'lae',
    },
    {
        name: 'Argentina',
        language: 'es-AR',
        countryCode: 'la',
    },
    {
        name: 'Barbados',
        language: 'en-BB',
        countryCode: 'lae',
    },
    {
        name: 'Belize',
        language: 'en-BZ',
        countryCode: 'lae',
    },
    {
        name: 'Bermuda',
        language: 'en-BM',
        countryCode: 'lae',
    },
    {
        name: 'Bolivia',
        language: 'es-BO',
        countryCode: 'la',
    },
    {
        name: 'Brasil',
        language: 'pt-BR',
        countryCode: 'br',
    },
    {
        name: 'British Virgin Islands',
        language: 'en-VG',
        countryCode: 'lae',
    },
    {
        name: 'Cayman Islands',
        language: 'en-KY',
        countryCode: 'lae',
    },
    {
        name: 'Chile',
        language: 'es-CL',
        countryCode: 'cl',
    },
    {
        name: 'Colombia',
        language: 'es-CO',
        countryCode: 'co',
    },
    {
        name: 'Costa Rica',
        language: 'es-CR',
        countryCode: 'la',
    },
    {
        name: 'Dominica',
        language: 'en-DM',
        countryCode: 'lae',
    },
    {
        name: 'República Dominicana',
        language: 'es-DO',
        countryCode: 'la',
    },
    {
        name: 'Ecuador',
        language: 'es-EC',
        countryCode: 'la',
    },
    {
        name: 'El Salvador',
        language: 'es-SV',
        countryCode: 'la',
    },
    {
        name: 'Grenada',
        language: 'en-GD',
        countryCode: 'lae',
    },
    {
        name: 'Guatemala',
        language: 'es-GT',
        countryCode: 'la',
    },
    {
        name: 'Guyana',
        language: 'en-GY',
        countryCode: 'lae',
    },
    {
        name: 'Honduras',
        language: 'es-HN',
        countryCode: 'la',
    },
    {
        name: 'Jamaica',
        language: 'en-JM',
        countryCode: 'lae',
    },
    {
        name: 'México',
        language: 'es-MX',
        countryCode: 'mx',
    },
    {
        name: 'Montserrat',
        language: 'en-MS',
        countryCode: 'lae',
    },
    {
        name: 'Nicaragua',
        language: 'es-NI',
        countryCode: 'la',
    },
    {
        name: 'Panamá',
        language: 'es-PA',
        countryCode: 'la',
    },
    {
        name: 'Paraguay',
        language: 'es-PY',
        countryCode: 'la',
    },
    {
        name: 'Perú',
        language: 'es-PE',
        countryCode: 'la',
    },
    {
        name: 'St. Kitts & Nevis',
        language: 'en-KN',
        countryCode: 'lae',
    },
    {
        name: 'St. Lucia',
        language: 'en-LC',
        countryCode: 'lae',
    },
    {
        name: 'St. Vincent & The Grenadines',
        language: 'en-VC',
        countryCode: 'lae',
    },
    {
        name: 'Suriname',
        language: 'en-SR',
        countryCode: 'lae',
    },
    {
        name: 'The Bahamas',
        language: 'en-BS',
        countryCode: 'lae',
    },
    {
        name: 'Trinidad & Tobago',
        language: 'en-TT',
        countryCode: 'lae',
    },
    {
        name: 'Turks & Caicos',
        language: 'en-TC',
        countryCode: 'lae',
    },
    {
        name: 'Uruguay',
        language: 'es-UY',
        countryCode: 'la',
    },
    {
        name: 'Venezuela',
        language: 'es-VE',
        countryCode: 'la',
    },
    {
        name: 'América Latina y el Caribe (Español)',
        language: 'es-419',
        countryCode: 'la',
    },
    {
        name: 'Latin America and the Caribbean (English)',
        language: 'en-419',
        countryCode: 'lae',
    },
    {
        name: 'Canada (English)',
        language: 'en-CA',
        countryCode: 'ca',
    },
];

export interface Country {
    name: string;
    language: string;
    countryCode: string;
}
export const createCountryRecord = (countries: Country[]): Record<string, Country> => {
    return countries.reduce(
        (acc, country) => {
            acc[country.countryCode] = country;
            return acc;
        },
        {} as Record<string, Country>,
    );
};

// Example usage
export const countriesRecord = createCountryRecord(countries);

log(countriesRecord);
