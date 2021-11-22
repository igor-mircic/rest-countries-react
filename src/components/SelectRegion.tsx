import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import { InputLabel, Select, SelectChangeEvent } from '@mui/material'
import { regions } from '../interfaces/ICountry'
import { useEffect } from 'react'
import { Box } from '@mui/system'
import { useLocalStorage } from '../hooks/useLocalStorage'

interface Props {
  onRegionChangeCallback: Function
}

export const SelectRegion = ({ onRegionChangeCallback }: Props) => {
  const [value, setValue] = useLocalStorage('region', '')

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
    <Box component={FormControl} variant="filled" maxWidth={200} width={'100%'}>
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
          <MenuItem key={r} value={r}>
            {r}
          </MenuItem>
        ))}
      </Select>
    </Box>
  )
}
