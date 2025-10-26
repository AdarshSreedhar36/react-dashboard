import { useState, useEffect } from 'react';

interface ContentData {
  id: number;
  name: string;
  description: string;
  genre: string;
  provider: string;
  videoImage: string;
  assetImage: string;
  duration: string;
  totalViews: number;
  prevTotalViews: number;
  status: string;
  created_at: string;
}

export const useContentData = () => {
  const [data, setData] = useState<ContentData[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://my-json-server.typicode.com/alb90/aieng-tech-test-assets/data');
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

  return { data, loading, error };
};