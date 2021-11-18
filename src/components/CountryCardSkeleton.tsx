import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import { CardActionArea, List, ListItem, Skeleton } from '@mui/material'

export const CountryCardSkeleton = () => {
  return (
    <Card sx={{ width: 260, height: 330 }}>
      <CardActionArea>
        <CardMedia component={Skeleton} variant="rectangular" height={150} />
        <CardContent>
          <Skeleton variant="text" height={32} />
          <List dense={true}>
            <ListItem>
              <Skeleton variant="text" height={25} width={'100%'} />
            </ListItem>
            <ListItem>
              <Skeleton variant="text" height={25} width={'100%'} />
            </ListItem>
            <ListItem>
              <Skeleton variant="text" height={25} width={'100%'} />
            </ListItem>
          </List>
        </CardContent>
      </CardActionArea>
    </Card>
  )
}
