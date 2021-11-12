const baseURL = 'https://restcountries.com/v2/all'
const fields = [
  'flags',
  'name',
  'nativeName',
  'alpha3Code',
  'population',
  'region',
  'subregion',
  'capital',
  'topLevelDomain',
  'currencies',
  'languages',
  'borders'
]
export const url = `${baseURL}?fields=${fields.join(',')}`
