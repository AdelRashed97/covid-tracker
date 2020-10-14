import { FormControl, MenuItem, Select } from '@material-ui/core';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import './App.css';

function App() {
  const updateTime = 30 * 60 * 1000; // min * sec * millisecond
  const [globalData,setGlobalData] =useState({})
  const [countriesData,setCountriesData]=useState([])
  const [countriesList,setCountriesList]=useState([])
  const [country,setCountry] =useState("worldwide")
  useEffect(()=>{
    // get global data
    axios.get(`https://disease.sh/v3/covid-19/all?yesterday=false&twoDaysAgo=false&allowNull=false`)
      .then(res =>  setGlobalData(res.data))
    // get data for each country
    axios.get(`https://disease.sh/v3/covid-19/countries?yesterday=false&twoDaysAgo=false&allowNull=false`)
      .then(res => setCountriesData(res.data))
    
    const countriesList = countriesData.map(country => (

      {
      name:country.country,
      value:country.countryInfo.iso2
      }
    )
    );
    setCountriesList(countriesList);
    
    // update data periodically
    setInterval(()=>{
        // get global data
      axios.get(`https://disease.sh/v3/covid-19/all?yesterday=false&twoDaysAgo=false&allowNull=false`)
      .then(res =>  setGlobalData(res.data))
      // get data for each country
      axios.get(`https://disease.sh/v3/covid-19/countries?yesterday=false&twoDaysAgo=false&allowNull=false`)
      .then(res => setCountriesData(res.data))
     
    },updateTime)

  },[countriesData, updateTime])
  return (
    <div className="app">
      <header>
      <h1>COVID-19 Tracker</h1>
      <FormControl className="app__dropdown">
        <Select
          variant="outlined"
          value={country}
          onChange={event => setCountry(event.target.value)}
          >
            <MenuItem  value ="worldwide">Worldwide</MenuItem>
            {countriesList.map((country,index) => {
              return <MenuItem value={country.value}>{country.name}</MenuItem>
            })
            }
            
          </Select>
          
      </FormControl>

      </header>
    </div>
  );
}

export default App;
