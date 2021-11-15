import { createContext, FC, useContext } from 'react'
import { restCountryAdapter } from '../api/adapters/restCountry'
import { url } from '../api/url'
import { IFetchStatus, useFetch } from '../hooks/useFetch'
import { ICountry } from '../interfaces/ICountry'

interface ICountriesContext {
  countries: ICountry[] | null
  status: IFetchStatus
  error: any
}

const initialContext: ICountriesContext = {
  countries: null,
  status: 'idle',
  error: ''
}

const CountriesContext = createContext<ICountriesContext>(initialContext)

export const CountriesProvider: FC = ({ children }) => {
  const { data, status, error } = useFetch(url)
  const context: ICountriesContext = {
    countries: restCountryAdapter(data),
    status,
    error
  }

  return (
    <CountriesContext.Provider value={context}>
      {children}
    </CountriesContext.Provider>
  )
}

export const useCountries = () => {
  const context = useContext(CountriesContext)

  if (context === undefined)
    throw new Error('useCountriesContext must be within a CountriesProvider')

  return context
}
