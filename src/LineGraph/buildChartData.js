export const buildChartData = (data,casesType)=>{
  const chartData = [];
  let lastDataPoint;
  for (let date in data.cases) {
    if (lastDataPoint) {
      const newDataPoint = {
        x: date,
        y: data[casesType][date] - lastDataPoint,
      };
      
      chartData.push(newDataPoint)

    }
    
    lastDataPoint = data[casesType][date];
  }
  return chartData;
}

