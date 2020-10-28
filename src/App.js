import React, { useEffect, useState } from 'react';
import { Card, CardContent } from '@material-ui/core';
import axios from 'axios';
import Header from './Header'
import Stats from './Stats';
import LineGraph from './LineGraph'
import Table from './Table'
import './App.css';

function App() {
  const updateTime = 30 * 60 * 1000; // min * sec * millisecond
  const [data,setData] =useState({})
  const [countriesList,setCountriesList]=useState([])
  const [country,setCountry] =useState("Worldwide")
  const [casesType,setCasesType] = useState('cases')

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const getCovidData= async() => {
    const data = {};
    await axios.get(`https://disease.sh/v3/covid-19/all?yesterday=false&twoDaysAgo=false&allowNull=false`)
      .then(res => {
        const result = covidData(res.data)
        console.log(typeof result)
        data["Worldwide"] = result;
      })

    await axios.get(`https://disease.sh/v3/covid-19/countries?yesterday=false&twoDaysAgo=false&allowNull=false`)
      .then(res => {
        res.data.forEach(country => {
          data[country.country] = covidData(country);
        });
      });

      setData(data);
      console.log(data)
      return data
      

  }
    

  const covidData = (data) => {
    return ({
      "totalCases":data.cases,
      "activeCases":data.active,
      "recoveredCases":data.recovered,
      "deathCases":data.deaths,
      "todayCases":data.todayCases,
      "todayDeaths":data.todayDeaths,
      "todayRecovered":data.todayRecovered,
      "lat":data.countryInfo === undefined ? null: data.countryInfo.lat,
      "long":data.countryInfo === undefined ? null: data.countryInfo.long,
      "flag":data.countryInfo === undefined ? null: data.countryInfo.flag,

    })
  }

  const changeCountry = (country) => {
    setCountry(country);
    setCasesType("cases")
  };

  useEffect(()=>{
   getCovidData()
   .then(data => setCountriesList(Object.keys(data)))
   
    setInterval(()=>{
      getCovidData()
    },updateTime)
  
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])
 
  
  return (
    <div className="app">
      <div className="app__left">
        <Header country={country} 
        changeCountry={changeCountry} 
        countries={countriesList} />

        <Stats stats={data[country]} setCasesType={setCasesType}/>
      </div>
      
      <div className = "app__right">
        <Card>
          <CardContent>
            
            <Table changeCountry={changeCountry}/>

            <LineGraph casesType={casesType} country={country} />
          </CardContent>
        </Card>

      </div>
    </div>         
    
  );
}

export default App;
