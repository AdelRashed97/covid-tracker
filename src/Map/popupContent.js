

export default function popupContent(feature) {
  const properties= feature.properties
  
  return (`
    <div>
    <div>
      <img src=${properties.flag} alt="flag"/>
    </div>

  <div ><strong>${properties.name}</strong></div>
  <div >Cases: ${properties.cases}</div>
  <div >Recovered: ${properties.recovered}</div>
  <div >Deaths ${properties.deaths}</div>

    </div>
  `
  )
}
