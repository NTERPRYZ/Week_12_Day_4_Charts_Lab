const LinearChart = function() {

  const container = document.querySelector("#linear-chart");
    const chart = new Highcharts.Chart({ //NEW
      chart: {
        type: 'line',
        renderTo: container
      },
      title: {
        text: "cohort e18 fave Languages"
      },
      xAxis: {
        title: {
              text: "Language"
        },
        tickInterval: 1,
        categories: ["JavaScript", "Java", "Ruby", "Other"]
      },
      yAxis: {
        type: "linear",
       title: {
        text: "Popularity"
        },
        tickInterval: 1
      },
      series: [{
        name: "Robert",
        data: [5, 7, 6, 2]
      }, {
        name: "Eric",
        data: [8, 8, 7, 6]
      }, {
        name: "Manny",
        data: [1, 10, 1, 1]
      }, {
        name: "Douglas",
        data: [10, 10, 10, 10]
      }]


    })

}
