import { useState, useEffect } from 'react';

const useFetchWithAdditionalData = (url, fetchAdditionalData) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
  
    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await fetch(url);
          const initialData = await response.json();
  
          const additionalData = await fetchAdditionalData(initialData);
  
          setData(additionalData);
          setLoading(false);
        } catch (err) {
          setError(err);
          setLoading(false);
        }
      };
  
      fetchData();
    }, [url, fetchAdditionalData]);
  
    return { data, loading, error };
  };
  
export default useFetchWithAdditionalData
