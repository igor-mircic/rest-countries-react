import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import { InputLabel, Select, SelectChangeEvent } from '@mui/material'
import { regions, TRegion } from '../interfaces/ICountry'

interface Props {
  onRegionChangeCallback: Function
}

export const SelectRegion = ({ onRegionChangeCallback }: Props) => {
  const handleChange = ({ target: { value } }: SelectChangeEvent) => {
    onRegionChangeCallback(value as TRegion)
  }
  return (
    <FormControl variant="filled" sx={{ minWidth: 180 }}>
      <InputLabel id="demo-simple-select-filled-label">
        Filter by Region
      </InputLabel>
      <Select
        labelId="demo-simple-select-filled-label"
        id="demo-simple-select-filled"
        onChange={handleChange}
      >
        <MenuItem value="">
          <em>Clear Filter</em>
        </MenuItem>
        {regions.map(r => (
          <MenuItem value={r}>{r}</MenuItem>
        ))}
      </Select>
    </FormControl>
  )
}
