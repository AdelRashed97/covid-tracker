import React from 'react'
import { Card, CardContent,Typography } from '@material-ui/core'
import './InfoBox.css'
import numeral from 'numeral'

function InfoBox({title,cases,totalCases,type,selected}) {
  return (
   <Card className={`infobox ${selected ? "selected":null} ${type}`}>
     <CardContent>
       <Typography className="infobox__title" color="textSecondary">
         {title}
       </Typography>

       <h2 className={`infobox__cases ${type}`}>{numeral(cases).format('+0.00a')}</h2>

       <Typography className="infobox__total" color="textPrimary">
         {numeral(totalCases).format('0.00a')} Total
       </Typography>

     </CardContent>
   </Card>
  )
}

export default InfoBox

