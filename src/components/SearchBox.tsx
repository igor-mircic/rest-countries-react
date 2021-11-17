import SearchIcon from '@mui/icons-material/Search'
import {
  FilledInput,
  FormControl,
  InputAdornment,
  InputLabel
} from '@mui/material'
import { Box } from '@mui/system'
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
    <Box component={FormControl} variant="filled" maxWidth={480} width={'100%'}>
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
    </Box>
  )
}
