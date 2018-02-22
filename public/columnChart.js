const ColumnChart = function() {

  const container = document.querySelector("#column-chart");
    const chart = new Highcharts.Chart({ //NEW
      chart: {
        type: 'column',
        renderTo: container
      },
      title: {
        text: "Our Favourite Programming Languages"
      },
      series: [{ //NEW
        name: "Cohort 7",
        data: [8, 12, 3, 1]
      }],
      xAxis: { //NEW
        categories: ['JavaScript', 'Java', 'Ruby', 'Algol']
      }
    });

}
