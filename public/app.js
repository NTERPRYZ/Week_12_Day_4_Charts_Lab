const app = function(){
  new PieChart();
  new LinearChart();



  const url = "https://restcountries.eu/rest/v2/all"
  makeRequest(url,requestComplete)
}

const makeRequest = function (url, callback) {
 const request    = new XMLHttpRequest();
 request.open("GET", url);
 request.addEventListener("load", callback);
 request.send(); //sending request to the server

}

const requestComplete = function () {
 if(this.status !== 200) return;  //404 cant find it, 500 server error, 200 everything ok and carries on. this.status same as saying request.status
 const jsonString = this.responseText;
 const countries  = JSON.parse(jsonString);
 let series = createSeries(countries);

  const columnChart = new ColumnChart(series);
}

const createSeries = function(countries){
  const topTenPopulationCountries = countries.sort(function(countryA, countryB){
    return countryB.population - countryA.population
  })


  let series = [];
  for(let index = 0; index < 10; index++){
    let dataSet = {name: topTenPopulationCountries[index].name, data: [topTenPopulationCountries[index].population]};
    series.push(dataSet);
  }
console.log(series);
  return series;
}




document.addEventListener('DOMContentLoaded', app)
