export const buildMapData = (geoJSON,data)=> {
  const mapData = {...geoJSON};
  for (const feature of mapData.features) {
    const country = feature.properties["ISO_A3"];
    if (data[country]) {
      feature.properties["cases"]=data[country].activeCases
      feature.properties["recovered"]=data[country].recoveredCases
      feature.properties["deaths"]=data[country].deathCases
      feature.properties["lat"]=data[country].lat
      feature.properties["lng"]=data[country].long
      feature.properties["flag"] = data[country].flag
      feature.properties["name"] = data[country].name
      
    } else {
      feature.properties["cases"]=0
      feature.properties["recovered"]=0
      feature.properties["deaths"]=0
      feature.properties["lat"]=0
      feature.properties["lng"]=0
      feature.properties["flag"] = null
      feature.properties["name"] = null

    }
  }

  return mapData
}