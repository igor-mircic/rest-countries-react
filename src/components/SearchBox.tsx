import SearchIcon from '@mui/icons-material/Search'
import {
  FilledInput,
  FormControl,
  InputAdornment,
  InputLabel
} from '@mui/material'
import { ChangeEvent } from 'react'

interface Props {
  onNameQueryChange: Function
}

export const SearchBox = ({ onNameQueryChange }: Props) => {
  const handleChange = ({
    target: { value }
  }: ChangeEvent<HTMLInputElement>) => {
    onNameQueryChange(value)
  }
  return (
    <FormControl sx={{ minWidth: 250 }} variant="filled">
      <InputLabel htmlFor="search-box-input">Search for country...</InputLabel>
      <FilledInput
        id="search-box-input"
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
