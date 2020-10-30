import React from 'react'
import {isEmpty} from 'lodash'
import { GeoJSON} from "react-leaflet";
import {casesStyle,recoveredStyle,deathsStyle} from './colors'

export default function ShowMap({casesType,mapData}) {
  let style
  // eslint-disable-next-line default-case
  switch(casesType){
    case "cases":
      style=casesStyle;
      break;
    case "recovered":
      style=recoveredStyle;
      break;
    case "deaths":
      style=deathsStyle;
      break
  }
console.log(style)
  return (
  <>

    {isEmpty(mapData)? null: <GeoJSON data={mapData} style={style}/>}
  </>
  )
}
