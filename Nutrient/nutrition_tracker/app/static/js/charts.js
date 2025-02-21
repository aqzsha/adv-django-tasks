fetch('/chart-data/')
  .then((response) => response.json())
  .then((data) => {
    new Chart(document.getElementById('goalBarChart'), {
      type: 'bar',
      data: {
        labels: ['Carbs', 'Proteins', 'Fats', 'Calories'],
        datasets: [
          {
            label: 'Consumed',
            data: [data.carbs, data.proteins, data.fats, data.calories],
            backgroundColor: 'blue',
          },
          {
            label: 'Goal',
            data: [
              data.goal_carbs,
              data.goal_proteins,
              data.goal_fats,
              data.goal_calories,
            ],
            backgroundColor: 'red',
          },
        ],
      },
    });
  });
