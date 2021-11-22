import { Grid, Container, Stack, Pagination } from '@mui/material'
import { Box } from '@mui/system'
import { ChangeEvent, useEffect, useState } from 'react'
import { CountryCard } from '../components/CountryCard'
import { CountryCardSkeleton } from '../components/CountryCardSkeleton'
import { SearchBox } from '../components/SearchBox'
import { SelectRegion } from '../components/SelectRegion'
import { useCountries } from '../contexts/Countries'
import { ICountry } from '../interfaces/ICountry'
import _ from 'lodash'
import { useLocalStorage } from '../hooks/useLocalStorage'

export const Home = () => {
  const { countries, isLoading } = useCountries()
  const [region, setRegion] = useLocalStorage('region', '')
  const [nameQuery, setNameQuery] = useLocalStorage('nameQuery', '')
  const [page, setPage] = useLocalStorage('page', 1)
  const [pageCnt, setPageCnt] = useState(1)

  const [filteredCountries, setFilteredCountries] = useState<
    ICountry[] | undefined
  >(undefined)

  useEffect(() => {
    const filteredChunks = _.chunk(
      countries?.filter(
        c =>
          c.name.toLowerCase().includes(nameQuery.toLowerCase()) &&
          c.region.includes(region)
      ),
      24
    )
    setPageCnt(filteredChunks.length - 1)
    setFilteredCountries(filteredChunks[page - 1])
  }, [countries, region, nameQuery, page])

  const handleChange = (event: ChangeEvent<unknown>, value: number) => {
    setPage(value)
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
  }

  return (
    <Container>
      <Stack direction={{ xs: 'column', md: 'row' }} spacing={2} py={6}>
        <SearchBox onNameQueryChange={setNameQuery} />
        <Box flexGrow={1} />
        <SelectRegion onRegionChangeCallback={setRegion} />
      </Stack>
      <Grid
        container
        spacing={8}
        direction={{ xs: 'column', md: 'row' }}
        alignItems="center"
      >
        {isLoading
          ? _.times(12, i => (
              <Grid item key={i}>
                <CountryCardSkeleton />
              </Grid>
            ))
          : filteredCountries &&
            filteredCountries.map(c => {
              return (
                <Grid item key={c.id}>
                  <CountryCard {...{ isLoading, ...c }} />
                </Grid>
              )
            })}
      </Grid>
      {pageCnt > 1 && (
        <Box display="flex" justifyContent="center" py={2}>
          <Pagination count={pageCnt} page={page} onChange={handleChange} />
        </Box>
      )}
    </Container>
  )
}
