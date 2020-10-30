import React, { useEffect,useState } from "react";
import { Map as LeafletMap, TileLayer,Popup} from "react-leaflet";
import {isEmpty} from 'lodash'
import axios from 'axios'
import {buildMapData} from './buildMapData'
import ShowMap from './ShowMap'
import './Map.css'



function Map({ data, casesType, center, zoom }) {
  const path = 'https://datahub.io/core/geo-countries/r/0.geojson'
  const [geoJSON,setGeoJSON]=useState({});
  const [mapData,setMapData]=useState({});

  useEffect(()=>{
    axios.get(path)
    .then(res=> setGeoJSON(res.data))
  },[])

  useEffect(()=>{
    if (!isEmpty(geoJSON) && !isEmpty(data)) {
      setMapData(buildMapData(geoJSON,data))

    }

  },[geoJSON,data])
  return (
    <div className="map">
      <LeafletMap center={center} zoom={zoom}>
      
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
        {/* {isEmpty(mapData) ? null: <GeoJSON data={mapData}/>} */}
        <ShowMap casesType={casesType} mapData={mapData}/>
        
      </LeafletMap>
    </div>
  );
}

export default Map;