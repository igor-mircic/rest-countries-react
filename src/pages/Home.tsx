import { Grid, Container, Stack } from '@mui/material'
import { Box } from '@mui/system'
import { useEffect, useState } from 'react'
import { CountryCard } from '../components/CountryCard'
import { CountryCardSkeleton } from '../components/CountryCardSkeleton'
import { SearchBox } from '../components/SearchBox'
import { SelectRegion } from '../components/SelectRegion'
import { useCountries } from '../contexts/Countries'
import { ICountry, TRegion } from '../interfaces/ICountry'
import _ from 'lodash'

export const Home = () => {
  const { countries, isLoading } = useCountries()
  const [region, setRegion] = useState<TRegion | ''>('')
  const [nameQuery, setNameQuery] = useState('')
  // const isLoading = true

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
        spacing={{ xs: 8, sm: 8 }}
        direction={{ xs: 'column', sm: 'row' }}
        alignItems="center"
        justifyContent={{ xs: 'center', lg: 'flex-start' }}
      >
        {isLoading
          ? _.times(12, i => (
              <Grid item key={i}>
                <CountryCardSkeleton />
              </Grid>
            ))
          : filteredCountries?.map(c => (
              <Grid item key={c.id}>
                <CountryCard {...{ isLoading, ...c }} />
              </Grid>
            ))}
      </Grid>
    </Container>
  )
}
