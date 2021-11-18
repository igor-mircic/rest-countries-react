import {
  Button,
  Container,
  List,
  ListItem,
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
  const country = countries.find(c => c.id === countryId)

  return (
    <Container sx={{ py: 6 }}>
      <Button component={Link} to="/" startIcon={<ArrowBack />}>
        Back
      </Button>
      {!country ? (
        <Typography variant="h4" pt={8}>
          Country not found!
        </Typography>
      ) : (
        <Grid container pt={8} spacing={{ xs: 4, md: 8, lg: 16 }}>
          <Grid item xs={12} md={6}>
            <Box
              component="img"
              src={country.flag}
              alt={`${country.name}'s flag`}
              sx={{ maxWidth: 500, width: '100%', boxShadow: 1 }}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <Grid container>
              <Grid item xs={12} pb={2}>
                <Typography variant="h4">{country.name}</Typography>
              </Grid>
              <Grid item xs={12}>
                <Grid container spacing={{ xs: 4, lg: 16 }} pb={6}>
                  <Grid item>
                    <List>
                      <ListItem>{`Native name: ${country.nativeName}`}</ListItem>
                      <ListItem>{`Population: ${country.population}`}</ListItem>
                      <ListItem>{`Region: ${country.region}`}</ListItem>
                      <ListItem>{`Sub region: ${country.subregion}`}</ListItem>
                      <ListItem>{`Capital: ${country.capital}`}</ListItem>
                    </List>
                  </Grid>
                  <Grid item>
                    <List>
                      <ListItem>{`Top level domain: ${country.tld}`}</ListItem>
                      <ListItem>{`Currencies: ${country.currencies}`}</ListItem>
                      <ListItem>{`Languages: ${country.languages}`}</ListItem>
                    </List>
                  </Grid>
                </Grid>
                <Grid item>
                  <Grid container spacing={2}>
                    {country.borders?.map(b => (
                      <Grid item key={b.id}>
                        <Button component={Link} to={`/${b.id}`}>
                          {b.name}
                        </Button>
                      </Grid>
                    ))}
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      )}
    </Container>
  )
}
