import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend, Title } from 'chart.js';

// Register elements
ChartJS.register(ArcElement, Tooltip, Legend, Title);

export const ExpenseChart = () => {
  const { transactions } = useContext(GlobalContext);

  // สร้างหมวดหมู่
  const categories = {};

  transactions.forEach(t => {
    const category = t.category || (t.amount > 0 ? 'Income' : 'Expense');
    if (!categories[category]) categories[category] = 0;
    categories[category] += Math.abs(t.amount);
  });

  const data = {
    labels: Object.keys(categories),
    datasets: [
      {
        label: 'Spending Overview',
        data: Object.values(categories),
        backgroundColor: [
          '#00b894', '#d63031', '#0984e3', '#fdcb6e', '#6c5ce7', '#e84393', '#00cec9', '#fab1a0'
        ],
        hoverOffset: 20,
        borderWidth: 2,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'bottom',
        labels: {
          boxWidth: 20,
          padding: 15,
        },
      },
      title: {
        display: true,
        text: 'Spending Overview',
        font: { size: 20 },
        color: '#2d3436',
      },
      tooltip: {
        callbacks: {
          label: function (context) {
            return `${context.label}: $${context.raw.toLocaleString()}`;
          },
        },
      },
    },
  };

  return (
    <div style={{ maxWidth: '500px', margin: '30px auto' }}>
      <Doughnut data={data} options={options} />
    </div>
  );
};
