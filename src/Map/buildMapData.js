export const buildMapData = (geoJSON,data)=> {
  const mapData = {...geoJSON};
  for (const feature of mapData.features) {
    const country = feature.properties["ISO_A3"];
    if (data[country]) {
      feature.properties["cases"]=data[country].activeCases
      feature.properties["recovered"]=data[country].recoveredCases
      feature.properties["deaths"]=data[country].deathCases
    } else {
      feature.properties["cases"]=0
      feature.properties["recovered"]=0
      feature.properties["deaths"]=0

    }
  }

  return mapData
}