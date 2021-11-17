import { Grid, Container, Stack } from '@mui/material'
import { Box } from '@mui/system'
import { useEffect, useState } from 'react'
import { CountryCard } from '../components/CountryCard'
import { SearchBox } from '../components/SearchBox'
import { SelectRegion } from '../components/SelectRegion'
import { useCountries } from '../contexts/Countries'
import { ICountry, TRegion } from '../interfaces/ICountry'

export const Home = () => {
  const { countries } = useCountries()
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

  return (
    <Container>
      <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} py={6}>
        <SearchBox onNameQueryChange={setNameQuery} />
        <Box flexGrow={1} />
        <SelectRegion onRegionChangeCallback={setRegion} />
      </Stack>
      <Grid
        container
        spacing={8}
        direction="row"
        alignItems="center"
        justifyContent="space-around"
      >
        {filteredCountries?.map(c => (
          <Grid item key={c.id}>
            <CountryCard {...c} />
          </Grid>
        ))}
      </Grid>
    </Container>
  )
}
