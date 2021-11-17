import {
  Button,
  Container,
  List,
  ListItem,
  Stack,
  Typography,
  Grid
} from '@mui/material'
import { Link, useParams } from 'react-router-dom'
import { useCountries } from '../contexts/Countries'
import { ArrowBack } from '@mui/icons-material'
import { Box } from '@mui/system'

export const Details = () => {
  const { countryId } = useParams()
  const { countries } = useCountries()
  const country = countries?.find(c => c.id === countryId)

  if (!country) {
    return <h1>Loading...</h1>
  }

  return (
    <Container sx={{ py: 6 }}>
      <Button component={Link} to="/" startIcon={<ArrowBack />}>
        Back
      </Button>
      <Stack direction={{ xs: 'column', sm: 'row' }} spacing={16} pt={8}>
        <Box
          component="img"
          src={country.flag}
          alt={`${country.name}'s flag`}
          sx={{ maxWidth: 500 }}
        />
        <Stack>
          <Typography variant="h4">{country.name}</Typography>
          <Stack direction={{ xs: 'column', sm: 'row' }} spacing={16}>
            <List>
              <ListItem>{`Native name: ${country.nativeName}`}</ListItem>
              <ListItem>{`Population: ${country.population}`}</ListItem>
              <ListItem>{`Region: ${country.region}`}</ListItem>
              <ListItem>{`Sub region: ${country.subregion}`}</ListItem>
              <ListItem>{`Capital: ${country.capital}`}</ListItem>
            </List>
            <List>
              <ListItem>{`Top level domain: ${country.tld}`}</ListItem>
              <ListItem>{`Currencies: ${country.currencies}`}</ListItem>
              <ListItem>{`Languages: ${country.languages}`}</ListItem>
            </List>
          </Stack>
          <Grid container spacing={2}>
            {country.borders?.map(b => (
              <Grid item key={b.id}>
                <Button component={Link} to={`/${b.id}`}>
                  {b.name}
                </Button>
              </Grid>
            ))}
          </Grid>
        </Stack>
      </Stack>
    </Container>
  )
}
