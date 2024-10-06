const labels = ['12:00', '13:00	', '14:00', '15:00', '16:00', '17:00']
  const labels2 = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho']


  const ctx = document.getElementById('myChart')
  const ctx2 = document.getElementById('myChart2')


  new Chart(ctx, {
    type: 'line',
    data: {
      labels: labels,
      datasets: [{
        backgroundColor: 'rgb(123, 255, 0)',
        borderColor: 'rgb(123, 255, 0)',
        label: 'Umidade',
        data: [80, 82, 80, 85, 80, 83],
        borderWidth: 1
      },

      {
        backgroundColor: 'rgb(255, 153, 0)',
        borderColor: 'rgb(255, 153, 0)',
        label: 'Temperatura',
        data: [30, 29, 28, 25, 22, 23],
        borderWidth: 1
      }
      ]

    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        },
      }
    }
  })

  new Chart(ctx2, {
    type: 'bar',
    data: {
      labels: labels2,
      datasets: [{
        backgroundColor: 'rgb(119, 0, 255)',
        borderColor: 'rgb(119, 0, 255)',
        label: 'Temperatura Média',
        data: [22, 24, 27, 23, 20, 18],
        borderWidth: 1
      },

      {
        backgroundColor: 'rgb(21, 113, 199)',
        borderColor: 'rgb(21, 113, 199)',
        label: 'Umidade Média',
        data: [90, 89, 93, 87, 88, 82],
        borderWidth: 1
      }
      ]

    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });