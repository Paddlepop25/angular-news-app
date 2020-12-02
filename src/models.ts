export const ID_APIKEY = 'newsapi.org'

export interface ApiKey {
  id: string
  api: string
}

export interface CountryList {
  name: string,
  alpha2Code: string,
  flag: string
}

export interface NewsArticle {
}

// {
//   "name": "United Arab Emirates",
//   "topLevelDomain": [
//     ".ae"
//   ],
//   "alpha2Code": "AE",
//   "alpha3Code": "ARE",
//   "callingCodes": [
//     "971"
//   ],
//   "capital": "Abu Dhabi",
//   "altSpellings": [
//     "AE",
//     "UAE"
//   ],
//   "region": "Asia",
//   "subregion": "Western Asia",
//   "population": 9856000,
//   "latlng": [
//     24.0,
//     54.0
//   ],
//   "demonym": "Emirati",
//   "area": 83600.0,
//   "gini": null,
//   "timezones": [
//     "UTC+04"
//   ],
//   "borders": [
//     "OMN",
//     "SAU"
//   ],
//   "nativeName": "دولة الإمارات العربية المتحدة",
//   "numericCode": "784",
//   "currencies": [
//     {
//       "code": "AED",
//       "name": "United Arab Emirates dirham",
//       "symbol": "د.إ"
//     }
//   ],
//   "languages": [
//     {
//       "iso639_1": "ar",
//       "iso639_2": "ara",
//       "name": "Arabic",
//       "nativeName": "العربية"
//     }
//   ],
//   "translations": {
//     "de": "Vereinigte Arabische Emirate",
//     "es": "Emiratos Árabes Unidos",
//     "fr": "Émirats arabes unis",
//     "ja": "アラブ首長国連邦",
//     "it": "Emirati Arabi Uniti",
//     "br": "Emirados árabes Unidos",
//     "pt": "Emirados árabes Unidos",
//     "nl": "Verenigde Arabische Emiraten",
//     "hr": "Ujedinjeni Arapski Emirati",
//     "fa": "امارات متحده عربی"
//   },
//   "flag": "https://restcountries.eu/data/are.svg",
//   "regionalBlocs": [
//     {
//       "acronym": "AL",
//       "name": "Arab League",
//       "otherAcronyms": [
        
//       ],
//       "otherNames": [
//         "جامعة الدول العربية",
//         "Jāmiʻat ad-Duwal al-ʻArabīyah",
//         "League of Arab States"
//       ]
//     }
//   ],
//   "cioc": "UAE"
// },