import React from 'react'
import { Grid } from '@material-ui/core'
import InfoBox from './InfoBox'
import './Stats.css'

export default function Stats({stats}) {
  return (
    <Grid className="app__stats" container justify="space-between" space={1} wrap="wrap">

      <Grid xs={12} sm={3}>

        <InfoBox 
          title="Active" 
          cases ={stats ? stats.todayCases : null}
          totalCases = {stats ? stats.activeCases : null }
         />

      </Grid>

      <Grid xs={12} sm={3}>

        <InfoBox 
          title="Recoverd" 
          cases ={stats ? stats.todayRecovered : null}
          totalCases = {stats ? stats.recoveredCases : null }
        />

      </Grid>

      <Grid xs={12} sm={3}>

        <InfoBox 
          title="Deaths" 
          cases ={stats ? stats.todayDeaths : null}
          totalCases = {stats ? stats.deathCases : null }
         />

      </Grid>
    </Grid>
  )
}
