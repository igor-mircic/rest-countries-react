import { createContext, FC } from 'react'

export const CountriesContext = createContext({})

export const CountriesProvider: FC = ({ children }) => {
  const context = {}
  return (
    <CountriesContext.Provider value={context}>
      {children}
    </CountriesContext.Provider>
  )
}
