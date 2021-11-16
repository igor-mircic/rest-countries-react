import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import { InputLabel, Select, SelectChangeEvent } from '@mui/material'
import { regions, TRegion } from '../interfaces/ICountry'
import { useEffect, useState } from 'react'

interface Props {
  onRegionChangeCallback: Function
}

export const SelectRegion = ({ onRegionChangeCallback }: Props) => {
  const [value, setValue] = useState('')

  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      onRegionChangeCallback(value)
    }, 300)
    return () => clearTimeout(delayDebounceFn)
  }, [value, onRegionChangeCallback])

  const handleChange = (event: SelectChangeEvent) => {
    event.preventDefault()
    setValue(event.target.value)
  }
  return (
    <FormControl variant="filled" sx={{ minWidth: 180 }}>
      <InputLabel id="demo-simple-select-filled-label">
        Filter by Region
      </InputLabel>
      <Select
        labelId="demo-simple-select-filled-label"
        id="demo-simple-select-filled"
        value={value}
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
