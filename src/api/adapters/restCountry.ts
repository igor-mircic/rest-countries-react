import { ICountry, ICountryAPI } from '../../interfaces/ICountry'

export const restCountryAdapter = (countries: ICountryAPI[]): ICountry[] =>
  countries.map(
    (c): ICountry => ({
      id: c.alpha3Code.toLowerCase(),
      flag: c.flags.svg,
      name: c.name,
      nativeName: c.nativeName,
      population: c.population.toLocaleString(),
      region: c.region,
      subregion: c.subregion,
      capital: c.capital,
      tld: c.topLevelDomain.join(', '),
      currencies: c.currencies ? c.currencies.map(c => c.name).join(', ') : '',
      languages: c.languages.map(l => l.name).join(', '),
      borders:
        c.borders &&
        c.borders.map(b => {
          const { alpha3Code, name } = countries.find(
            c => c.alpha3Code === b
          ) as ICountryAPI
          return { id: alpha3Code.toLowerCase(), name }
        })
    })
  )
