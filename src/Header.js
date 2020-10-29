import React from 'react'
import {Grid,Select,FormControl,MenuItem} from '@material-ui/core'

function Header({country,changeCountry,countries}) {
  return (
    <Grid container justify={'space-between'}
     alignItems={'center'} 
     className="app__header">

    <Grid item xs={6}>
      <h1>COVID-19 Tracker </h1>
    </Grid>

    <Grid container xs={5} justify="flex-end">
      <FormControl className="app__dropdown">
        <Select
          variant="outlined"
          value={country}
          onChange={event => changeCountry(event.target.value)}
          autoWidth
          
          >
            { 
              countries.map((country,index) => {
              return <MenuItem key={index} value={country.iso3}>{country.name}</MenuItem>
            })
            }
            
          </Select>
        
    </FormControl>
    </Grid>
  </Grid>
  )
}

export default Header
