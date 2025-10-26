import { useState, useEffect } from 'react';

interface TimeseriesData {
  timestamp: string;
  value: number;
}

export const useTimeseries = () => {
  const [data, setData] = useState<TimeseriesData[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://my-json-server.typicode.com/alb90/aieng-tech-test-timeseries/data');
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const jsonData = await response.json();
        setData(jsonData);
        setLoading(false);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred');
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // Format data for Chart.js
  const chartData = {
    labels: data.map(item => new Date(item.timestamp).toLocaleString()),
    values: data.map(item => item.value)
  };

  return { data, loading, error, chartData };
};