import { Button, Container, List, Typography, Grid } from '@mui/material'
import { Link, useParams } from 'react-router-dom'
import { useCountries } from '../contexts/Countries'
import { ArrowBack } from '@mui/icons-material'
import { Box } from '@mui/system'
import { CountryListItem } from '../components/CountryListItem'
import { ICountry } from '../interfaces/ICountry'

export const Details = () => {
  const { countryId } = useParams()
  const { countries } = useCountries()
  const {
    flag,
    name,
    nativeName,
    population,
    region,
    subregion,
    capital,
    tld,
    currencies,
    languages,
    borders
  } = countries.find(c => c.id === countryId) as ICountry

  return (
    <Container>
      <Box pt={6}>
        <Button component={Link} to="/" startIcon={<ArrowBack />}>
          Back
        </Button>
        <Grid container pt={6} spacing={{ xs: 6 }}>
          <Grid item xs={12} xl={6}>
            <Box
              component="img"
              src={flag}
              alt={`${name}'s flag`}
              sx={{ maxWidth: 500, width: '100%', boxShadow: 1 }}
            />
          </Grid>
          <Grid item xs={12} xl={6}>
            <Grid container>
              <Grid item xs={12} pb={2}>
                <Typography variant="h4">{name}</Typography>
              </Grid>
              <Grid item xs={12}>
                <Grid
                  container
                  spacing={{ xs: 2, md: 8, lg: 10, xl: 16 }}
                  pb={5}
                >
                  <Grid item>
                    <List>
                      <CountryListItem
                        label={'Native name'}
                        item={nativeName}
                      />
                      <CountryListItem label={'Population'} item={population} />
                      <CountryListItem label={'Region'} item={region} />
                      <CountryListItem label={'Sub Region'} item={subregion} />
                      <CountryListItem label={'Capital'} item={capital} />
                    </List>
                  </Grid>
                  <Grid item>
                    <List>
                      <CountryListItem label={'Top level domain'} item={tld} />
                      <CountryListItem label={'Currencies'} item={currencies} />
                      <CountryListItem label={'Languages'} item={languages} />
                    </List>
                  </Grid>
                </Grid>
                {borders && borders.length > 0 && (
                  <Grid item mb={8}>
                    <Grid container spacing={2}>
                      <Grid item>
                        <Typography sx={{ mt: 0.7, fontWeight: '600' }}>
                          Borders:
                        </Typography>
                      </Grid>
                      {borders?.map(b => (
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
      </Box>
    </Container>
  )
}
