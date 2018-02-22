const PieChart = function() {

  const container = document.querySelector("#pie-chart");
  const chart = new Highcharts.Chart({
    chart: {
      type: 'pie',
      renderTo: container
    },
    title: { //NEW
      text: "Pokemon Types I've Caught"
    },
    series: [{
       name: "Type", //NEW
        data: [//NEW
              {
                name: "Fire",
                y: 74,
                color: "#ffac33"
              },
              {
                name: "Water",
                y: 25,
                color: "#73b7ff",

              },
              {
                name: "Grass",
                y: 1,
                color: "#00ba2f"
              },
              {
                name: "Eric",
                y: 15,
                color: "salmon",
                sliced: true
              }] //NEW
     }]
  });
}
