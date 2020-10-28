import axios from 'axios';
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

export  const getCovidData= async(setData) => {
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
  

