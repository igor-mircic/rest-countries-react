import { ListItem, Typography } from '@mui/material'

interface Props {
  label: string
  item: string
}

export const CountryListItem = ({ label, item }: Props) => (
  <ListItem>
    <Typography fontWeight="600" sx={{ paddingRight: 1 }}>
      {label}:
    </Typography>
    <Typography component="span">{item}</Typography>
  </ListItem>
)
