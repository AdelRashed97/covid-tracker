import React, { useEffect, useState } from 'react';
import { Card, CardContent } from '@material-ui/core';
import {getCovidData,getListOfCountries} from './dataHelper'
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
  

  const changeCountry = (country) => {
    setCountry(country);
    setCasesType("cases")
  };

  useEffect(()=>{
   getCovidData(setData)
   .then(data => getListOfCountries(data))
   .then(countries => setCountriesList(countries))
   
    setInterval(()=>{
      getCovidData(setData)
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
