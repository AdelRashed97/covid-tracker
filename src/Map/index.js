import React from "react";
import { Map as LeafletMap, TileLayer } from "react-leaflet";
import './Map.css'


function Map({ countries, casesType, center, zoom }) {
  return (
    <div className="map">
      <LeafletMap center={{ lat: 34.80746, lng: -40.4796 }} zoom={3}>
      
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
        {/* {showDataOnMap(countries, casesType)} */}
      </LeafletMap>
    </div>
  );
}

export default Map;