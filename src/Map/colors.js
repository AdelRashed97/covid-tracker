

function activeCasesColor(d) {
  return d >= 2e6 ? '#b10026' :
         d > 1e6  ? '#e31a1c' :
         d > 5e5  ? '#fc4e2a' :
         d > 1e5  ? '#fd8d3c' :
         d > 5e4  ? '#feb24c' :
         d > 1e4  ? '#fed976' :
         d > 1e3   ? '#ffeda0' :
                    '#ffffcc';
}

function recoveredCasesColor(d) {
  return d >= 5e6 ? '#005a32' :
         d > 1e6  ? '#238443' :
         d > 5e5  ? '#41ab5d' :
         d > 1e5  ? '#78c679' :
         d > 5e4  ? '#addd8e' :
         d > 1e4  ? '#d9f0a3' :
         d > 1e3   ? '#f7fcb9' :
                    '#ffffe5';
}

function deathCasesColor(d) {
  return d > 25e4  ? '#cb181d' :
         d > 2e5  ? '#ef3b2c' :
         d > 1e5  ? '#fb6a4a' :
         d > 5e4  ? '#fc9272' :
         d > 1e4  ? '#fcbba1' :
         d > 1e3   ? '#fee0d2' :
                      '#fff5f0';
         
}


export function casesStyle(feature) {
  return {
      fillColor: activeCasesColor(feature.properties.cases),
      weight: 1,
      opacity: 0.5,
      color:'black',
      fillOpacity: 0.7
  };
}

export function recoveredStyle(feature) {
  return {
      fillColor: recoveredCasesColor(feature.properties.recovered),
      weight: 1,
      opacity: 0.5,
      color:'black',
      fillOpacity: 0.7
  };
}

export function deathsStyle(feature) {
  return {
      fillColor: deathCasesColor(feature.properties.deaths),
      weight: 1,
      opacity: 0.5,
      color:'black',
      fillOpacity: 0.7
  };
}
