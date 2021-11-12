export interface ICountry {
  id: string
  flag: string
  name: string
  nativeName: string
  population: string
  region: Region
  subregion: string
  capital: string
  tld: string
  currencies: string
  languages: string
  borders?: Border[]
}

export interface ICountryAPI {
  currencies: Currency[]
  languages: Language[]
  name: string
  topLevelDomain: string[]
  alpha3Code: string
  capital: string
  subregion: string
  region: Region
  population: number
  borders?: string[]
  nativeName: string
  flags: Flags
}

export type Region =
  | 'Africa'
  | 'Americas'
  | 'Antarctic'
  | 'Antarctic Ocean'
  | 'Asia'
  | 'Europe'
  | 'Oceania'
  | 'Polar'

export interface Border {
  name: string
  id: string
}

interface Currency {
  code: string
  name: string
  symbol: string
}

interface Flags {
  svg: string
  png: string
}

interface Language {
  iso639_1?: string
  iso639_2: string
  name: string
  nativeName?: string
}
