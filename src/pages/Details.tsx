import { Link, useParams } from 'react-router-dom'
import { useCountries } from '../contexts/Countries'

export const Details = () => {
  const { countryId } = useParams()
  const { status, countries, error } = useCountries()

  if (status === 'error') {
    console.log(`Error rendering Home page. Message:${error}`)
  }

  if (status === 'idle' || status === 'fetching') {
    return <h1>Loading...</h1>
  }

  const country = countries?.find(c => c.id === countryId)

  return (
    <div>
      <div>
        <Link to="/">Back</Link>
      </div>
      <h1>{country?.name}</h1>
    </div>
  )
}
