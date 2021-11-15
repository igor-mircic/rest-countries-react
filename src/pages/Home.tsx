import { Link } from '@mui/material'
import { Link as RouterLink } from 'react-router-dom'
import { useCountries } from '../contexts/Countries'

export const Home = () => {
  const { status, countries, error } = useCountries()

  if (status === 'error') {
    console.log(`Error rendering Home page. Message:${error}`)
  }

  if (status === 'idle' || status === 'fetching') {
    return <h1>Loading...</h1>
  }

  return (
    <div>
      {countries?.map(c => (
        <div key={c.id}>
          <Link component={RouterLink} to={c.id}>
            {c.name}
          </Link>
        </div>
      ))}
    </div>
  )
}
