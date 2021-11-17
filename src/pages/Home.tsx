import { Grid, Container, Stack, Typography } from '@mui/material'
import { Box } from '@mui/system'
import { useEffect, useState } from 'react'
import { CountryCard } from '../components/CountryCard'
import { SearchBox } from '../components/SearchBox'
import { SelectRegion } from '../components/SelectRegion'
import { useCountries } from '../contexts/Countries'
import { ICountry, TRegion } from '../interfaces/ICountry'

export const Home = () => {
  const { isLoading, countries } = useCountries()
  const [region, setRegion] = useState<TRegion | ''>('')
  const [nameQuery, setNameQuery] = useState('')

  const [filteredCountries, setFilteredCountries] = useState<
    ICountry[] | undefined
  >(countries)

  useEffect(() => {
    setFilteredCountries(
      countries?.filter(
        c =>
          c.name.toLowerCase().includes(nameQuery.toLowerCase()) &&
          c.region.includes(region)
      )
    )
  }, [countries, region, nameQuery])

  if (isLoading) {
    return <Typography variant="h1">Loading...</Typography>
  }

  return (
    <Container>
      <Stack direction="row" spacing={2} py={6}>
        <SearchBox onNameQueryChange={setNameQuery} />
        <Box flexGrow={1} />
        <SelectRegion onRegionChangeCallback={setRegion} />
      </Stack>
      <Grid container spacing={8}>
        {filteredCountries?.map(c => (
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <CountryCard key={c.id} {...c} />
          </Grid>
        ))}
      </Grid>
    </Container>
  )
}
