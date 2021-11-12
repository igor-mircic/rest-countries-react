import { CountriesProvider } from '../contexts/Countries'
import { Home } from '../pages/Home'

export const App = () => {
  return (
    <>
      <CountriesProvider>
        <Home />
      </CountriesProvider>
    </>
  )
}
