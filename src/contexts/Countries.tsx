import { createContext, FC, useContext } from 'react'
import { restCountryAdapter } from '../api/adapters/restCountry'
import { url } from '../api/url'
import { useFetch } from '../hooks/useFetch'
import { ICountry } from '../interfaces/ICountry'

interface ICountriesContext {
  countries: ICountry[] | []
  isLoading: boolean
}

const initialContext: ICountriesContext = {
  countries: [],
  isLoading: true
}

const CountriesContext = createContext<ICountriesContext>(initialContext)

export const CountriesProvider: FC = ({ children }) => {
  const { data, status, error } = useFetch(url)
  let context = initialContext

  if (status === 'error') {
    console.log(`Error fetching countries. Message:${error}`)
  }

  if (status === 'fetched') {
    context = {
      countries: restCountryAdapter(data),
      isLoading: false
    }
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
