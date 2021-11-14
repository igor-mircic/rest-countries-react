import { Link } from 'react-router-dom'
import { useCountries } from '../contexts/Countries'

export const Home = () => {
  const { status, countries, error } = useCountries()

  switch (status) {
    case 'fetching':
      return <h1>Loading...</h1>
    case 'error':
      return <h1>{error}</h1>
    case 'fetched':
      return (
        <div>
          {countries?.map(c => (
            <div key={c.id}>
              <Link to={c.id}>{c.name}</Link>
            </div>
          ))}
        </div>
      )
    default:
      return <></>
  }
}
