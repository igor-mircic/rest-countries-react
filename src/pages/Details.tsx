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
    <Container>
      <Box pt={6}>
        <Button component={Link} to="/" startIcon={<ArrowBack />}>
          Back
        </Button>
        {country && (
          <Grid container pt={6} spacing={{ xs: 6 }}>
            <Grid item xs={12} xl={6}>
              <Box
                component="img"
                src={country.flag}
                alt={`${country.name}'s flag`}
                sx={{ maxWidth: 500, width: '100%', boxShadow: 1 }}
              />
            </Grid>
            <Grid item xs={12} xl={6}>
              <Grid container>
                <Grid item xs={12} pb={2}>
                  <Typography variant="h4">{country.name}</Typography>
                </Grid>
                <Grid item xs={12}>
                  <Grid
                    container
                    spacing={{ xs: 2, md: 8, lg: 10, xl: 16 }}
                    pb={5}
                  >
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
                  {country.borders && country.borders.length > 0 && (
                    <Grid item mb={8}>
                      <Grid container spacing={2}>
                        <Grid item>
                          <Box sx={{ mt: 0.7 }}>Borders:</Box>
                        </Grid>
                        {country.borders?.map(b => (
                          <Grid item key={b.id}>
                            <Button component={Link} to={`/${b.id}`}>
                              {b.name}
                            </Button>
                          </Grid>
                        ))}
                      </Grid>
                    </Grid>
                  )}
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        )}
      </Box>
    </Container>
  )
}
