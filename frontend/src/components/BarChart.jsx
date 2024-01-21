import Chart from 'chart.js/auto';
import React, { useEffect, useRef, useState } from 'react';

export const BarChart = ({ data }) => {
  const chartRef = useRef();
  const [chartInstance, setChartInstance] = useState(null);

  useEffect(() => {
    const clientByCountry = data.reduce((acc, client) => {
      const country = client.id_pais.nombre;
      acc[country] = (acc[country] || 0) + 1;
      return acc;
    }, {});

    const config = {
      type: 'bar',
      data: {
        labels: Object.keys(clientByCountry),
        datasets: [
          {
            label: '# of Clients',
            data: Object.values(clientByCountry),
            backgroundColor: 'rgba(255, 99, 132, 0.2)',
            borderColor: 'rgba(255, 99, 132, 1)',
            borderWidth: 1,
          },
        ],
      },
      options: {
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    };

    if (chartInstance) {
      chartInstance.destroy();
    }
    const ctx = chartRef.current.getContext('2d');
    const newChartInstance = new Chart(ctx, config);
    setChartInstance(newChartInstance);
  }, [data]);

  return <canvas ref={chartRef} width={500} height={200}></canvas>;
};
