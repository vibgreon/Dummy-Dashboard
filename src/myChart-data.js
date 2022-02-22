export const myChart = {
    type: "line",
    data: {
      labels: ["1","2","3","4","5","6","7","8","9","10","11","12","13","14","15","16","17","18","19","20"],
      datasets: [
        {
          label: "Dummy Data - 01/10/2021",
          data: [1898.166, 201, 3.003, 10.323, 954.792, 285.886, 403.662, 501.514,150.166, 20.081, 300.003, 10.323, 354.792, 985.886, 43.662, 501.514,501.514,0.166, 20.081, 300.003],
          borderColor: "#1a53ff",
          pointRadius: 0,
          borderWidth: 2
        }
      ]
    },
    options: {
      responsive: true,
      scales: {
        yAxes: [
          {
            ticks: {
              beginAtZero: true,
            }
          }
        ],
        xAxes: [
            {
              gridLines: {
                display: false,
                zeroLineColor: "transparent"
              }
            }
        ]
      }
    }
};
  
export default myChart;