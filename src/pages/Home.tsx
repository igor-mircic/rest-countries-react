import { Grid, Container, Stack } from '@mui/material'
import { Box } from '@mui/system'
import { CountryCard } from '../components/CountryCard'
import { SearchBox } from '../components/SearchBox'
import { SelectRegion } from '../components/SelectRegion'
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
    <Container maxWidth="lg">
      <Stack direction="row" spacing={2} py={6}>
        <SearchBox />
        <Box flexGrow={1} />
        <SelectRegion />
      </Stack>
      <Grid container spacing={8}>
        {countries?.map(c => (
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <CountryCard key={c.id} {...c} />
          </Grid>
        ))}
      </Grid>
    </Container>
  )
}
