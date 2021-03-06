import axios from 'axios'
import React, { useEffect, useState } from 'react'
import {Line} from 'react-chartjs-2'
import {options} from './options'
import { buildChartData } from './buildChartData'
import { Box, Typography } from '@material-ui/core'




export default function LineGraph({casesType,country,countryName}) {
  const [tsData, setTsData]=useState({}); // ts stands for time series
  const [chartData,setChartData]=useState([]);
  // fetch time series data for selected option
  useEffect(()=>{
    
    if (country === 'Worldwide'){
      axios.get('https://disease.sh/v3/covid-19/historical/all?lastdays=120')
        .then(res => setTsData(res.data) )

    } else {
      axios.get(`https://disease.sh/v3/covid-19/historical/${country}?lastdays=120`)
        .then(res => setTsData(res.data.timeline) )
      
    }

  },[country])
  // build the line graph data
  useEffect(()=>{
    const chartData = buildChartData(tsData,casesType)
    setChartData(chartData);
  },[tsData,casesType])

  let backgroundColor,borderColor;
  // eslint-disable-next-line default-case
  switch(casesType) {
    case 'cases':
      backgroundColor = "rgba(241,196,15,0.5)";
      borderColor = "#F1C40F";
      break;
    case 'recovered':
      backgroundColor = "rgba(46, 204, 113,0.5)";
      borderColor = "#2ECC71";
      break;
    case 'deaths':
      backgroundColor = "rgba(231, 76, 60 ,0.5)";
      borderColor = "#E74C3C";
  }

  return (
    <div>
      <h3> {countryName} new {casesType} </h3>
      <div className="app__line-graph-container">

      <Line
          data={{
            datasets: [
              {
                backgroundColor,
                borderColor,
                data: chartData,
              },
            ],
          }}
          options={options}
        />
      </div>
        <Box fontStyle="italic" >
        <Typography variant="caption" >
          Note: Because of unavailabe data, some graphs are empty
        </Typography>
        </Box>
    </div>
  )
}
