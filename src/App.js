import React, { useEffect, useState } from 'react';
import { Card, CardContent } from '@material-ui/core';
import {useWindowWidth} from '@react-hook/window-size'
import {getCovidData,getListOfCountries} from './dataHelper'
import Header from './Header'
import Stats from './Stats';
import LineGraph from './LineGraph'
import Table from './Table'
import Map from './Map'
import './App.css';
import "leaflet/dist/leaflet.css";

function App() {
  const width = useWindowWidth()
  const updateTime = 30 * 60 * 1000; // min * sec * millisecond
  const [data,setData] =useState({})
  const [countriesList,setCountriesList]=useState([])
  const [country,setCountry] =useState("Worldwide")
  const [casesType,setCasesType] = useState('cases')
  const [mapZoom,setMapZoom] = useState(width >=600 ? 2:1)
  const [mapCenter,setMapCenter] = useState({ lat: 34.80746, lng: -40.4796 })
  // eslint-disable-next-line react-hooks/exhaustive-deps
  

  const changeCountry = (country) => {
    setCountry(country);
    setCasesType("cases")
    if (country ==="Worldwide") {
      setMapCenter({ lat: 34.80746, lng: -40.4796 })
      if (width >= 600 ) {
        setMapZoom(2)
      } else {
        setMapZoom(1)
      }
    } else {
      setMapCenter({ lat: data[country].lat, lng: data[country].long })
      if (width >= 600 ) {
        setMapZoom(4)
      } else {
        setMapZoom(3)
      }
    }

    
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
 // change map zoom for different screens
  useEffect(()=>{
    setMapZoom(width >=600 ? 2:1)
  },[width])


  return (
    <div className="app">
      <div className="app__left">
        <Header country={country} 
        changeCountry={changeCountry} 
        countries={countriesList} />

        <Stats stats={data[country]} setCasesType={setCasesType} casesType={casesType}/>
        <Map zoom={mapZoom} center={mapCenter} data={data} casesType={casesType}/>
      </div>
      
      <div className = "app__right">
        <Card>
          <CardContent>
            
            <Table changeCountry={changeCountry}/>

            <LineGraph casesType={casesType} country={country} countryName={data[country] ? data[country].name:"Worldwide"} />
          </CardContent>
        </Card>

      </div>
    </div>         
    
  );
}

export default App;
