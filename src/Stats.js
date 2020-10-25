import React from 'react'
import { Grid } from '@material-ui/core'
import InfoBox from './InfoBox'
import './Stats.css'

export default function Stats({stats,setCasesType}) {
  return (
    <Grid className="app__stats" container justify="space-between" space={1} wrap="wrap">

      <Grid className="stats__box"xs={12} sm={3} 
        onClick={()=>setCasesType("cases")}>

        <InfoBox 
          title="Active" 
          cases ={stats ? stats.todayCases : null}
          totalCases = {stats ? stats.activeCases : null }
         />

      </Grid>

      <Grid className="stats__box" xs={12} sm={3}
        onClick={()=>setCasesType("recovered")}>

        <InfoBox 
          title="Recoverd" 
          cases ={stats ? stats.todayRecovered : null}
          totalCases = {stats ? stats.recoveredCases : null }
        />

      </Grid>

      <Grid className="stats__box" xs={12} sm={3}
         onClick={()=>setCasesType("deaths")}>

        <InfoBox 
          title="Deaths" 
          cases ={stats ? stats.todayDeaths : null}
          totalCases = {stats ? stats.deathCases : null }
         />

      </Grid>
    </Grid>
  )
}
