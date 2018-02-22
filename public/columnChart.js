const ColumnChart = function(series) {

  const container = document.querySelector("#column-chart");
    const chart = new Highcharts.Chart({ //NEW
      chart: {
        type: 'column',
        renderTo: container
      },
      title: {
        text: "Population By Country"
      },
      series: series,
      xAxis: { //NEW
        Title: "Countries"
      }
    });

}
