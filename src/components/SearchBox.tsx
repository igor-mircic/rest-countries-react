import SearchIcon from '@mui/icons-material/Search'
import {
  FilledInput,
  FormControl,
  InputAdornment,
  InputLabel
} from '@mui/material'
import { ChangeEvent, useEffect, useState } from 'react'

interface Props {
  onNameQueryChange: Function
}

export const SearchBox = ({ onNameQueryChange }: Props) => {
  const [value, setValue] = useState('')

  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      onNameQueryChange(value)
    }, 500)
    return () => clearTimeout(delayDebounceFn)
  }, [value, onNameQueryChange])

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    event.preventDefault()
    setValue(event.target.value)
  }

  return (
    <FormControl sx={{ minWidth: 250 }} variant="filled">
      <InputLabel htmlFor="search-box-input">Search for country...</InputLabel>
      <FilledInput
        id="search-box-input"
        value={value}
        onChange={handleChange}
        endAdornment={
          <InputAdornment position="end">
            <SearchIcon />
          </InputAdornment>
        }
      />
    </FormControl>
  )
}
