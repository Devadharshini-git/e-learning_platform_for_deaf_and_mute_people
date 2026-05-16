import { useState, useCallback } from 'react';

const useApi = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const call = useCallback(async (apiFn, ...args) => {
    setLoading(true);
    setError(null);
    try {
      const result = await apiFn(...args);
      return result;
    } catch (err) {
      setError('Something went wrong. Please try again.');
      return null;
    } finally {
      setLoading(false);
    }
  }, []);

  return { loading, error, call };
};

export default useApi;