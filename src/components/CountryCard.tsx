import * as React from 'react'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import { Link } from 'react-router-dom'
import { CardActionArea, List, ListItem } from '@mui/material'

interface Props {
  id: string
  name: string
  flag: string
  population: string
  region: string
  capital: string
}

export const CountryCard = ({
  id,
  name,
  flag,
  population,
  region,
  capital
}: Props) => {
  return (
    <Card sx={{ width: 260 }}>
      <CardActionArea component={Link} to={id}>
        <CardMedia
          component="img"
          image={flag}
          alt={`Flag of ${name}`}
          height={150}
        />
        <CardContent>
          <Typography gutterBottom variant="h6" component="div">
            {name}
          </Typography>
          <List dense={true}>
            <ListItem>{`Population: ${population}`}</ListItem>
            <ListItem>{`Region: ${region}`}</ListItem>
            <ListItem>{`Capital: ${capital}`}</ListItem>
          </List>
        </CardContent>
      </CardActionArea>
    </Card>
  )
}
