import { FormControl, FormHelperText, InputLabel, NativeSelect } from '@mui/material'
import React from 'react'

const ContrySelector = ({value,handleOnchange,countries}) => {
  return (
    <FormControl>
      <InputLabel htmlFor='country-selector' shrink>Quốc gia</InputLabel>
      <NativeSelect
        value={value}
        onChange={handleOnchange}
        inputProps={{
          name: 'country',
          id: 'country-selector'
        }}
      >
        {
          countries?.map((country)=>{
            return(
              <option
                value={country.ISO2.toLowerCase()}
              >{country.Country}</option>
            )
          })
        }
      </NativeSelect>
      <FormHelperText>Lựa chọn quốc gia</FormHelperText>
    </FormControl>
  )
}

export default ContrySelector