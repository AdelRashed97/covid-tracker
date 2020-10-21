import React from 'react'
import { Card, CardContent,Typography } from '@material-ui/core'
import './InfoBox.css'

function InfoBox({title,cases,totalCases}) {
  return (
   <Card className="infobox">
     <CardContent>
       <Typography className="infobox__title" color="textSecondary">
         {title}
       </Typography>

       <h2 className="infobox__cases">{cases}</h2>

       <Typography className="infobox__total" color="textPrimary">
         {totalCases} Total
       </Typography>

     </CardContent>
   </Card>
  )
}

export default InfoBox

