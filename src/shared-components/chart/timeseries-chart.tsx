import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ChartOptions
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import './timeseries-chart.scss';

// Register ChartJS components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

interface TimeseriesChartProps {
  labels: string[];
  values: number[];
  loading?: boolean;
  error?: string | null;
}

const TimeseriesChart: React.FC<TimeseriesChartProps> = ({
  labels,
  values,
  loading,
  error
}) => {
  if (loading) {
    return <div className="chart-loading">Loading chart data...</div>;
  }

  if (error) {
    return <div className="chart-error">Error: {error}</div>;
  }

  const options: ChartOptions<'line'> = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'top' as const,
      },
      title: {
        display: true,
        text: 'Time Series Data',
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        grid: {
          color: 'rgba(0, 0, 0, 0.1)',
        },
      },
      x: {
        grid: {
          display: false,
        },
        ticks: {
          maxRotation: 45,
          minRotation: 45,
        },
      },
    },
    elements: {
      line: {
        tension: 0.3, // Makes the line slightly curved
      },
      point: {
        radius: 3,
        hoverRadius: 6,
      },
    },
    interaction: {
      intersect: false,
      mode: 'index',
    },
  };

  const data = {
    labels,
    datasets: [
      {
        label: 'Time Series',
        data: values,
        borderColor: '#4a90e2',
        backgroundColor: 'rgba(74, 144, 226, 0.5)',
        fill: true,
        pointBackgroundColor: '#4a90e2',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: '#4a90e2',
      },
    ],
  };

  return (
    <div className="timeseries-chart">
      <Line options={options} data={data} />
    </div>
  );
};

export default TimeseriesChart;