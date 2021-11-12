import { useCountries } from '../contexts/Countries'

export const Home = () => {
  const { status, countries, error } = useCountries()
  if (status === 'fetching') {
    return <h1>Loading...</h1>
  }
  if (status === 'error') {
    return <h1>{error}</h1>
  }
  return <pre>{JSON.stringify(countries, null, 2)}</pre>
}
