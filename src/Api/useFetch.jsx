import { useState } from 'react';

const useFetch = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  const signup = async (userData) => {
    setLoading(true);
    setError(null);
    setSuccess(false);

    try {
      // Make API request to signup endpoint
      const response = await fetch('https://hospital-management-backend.onrender.com/doctor/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      });

      if (!response.ok) {
        throw new Error('Signup failed');
      }

      setSuccess(true);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return { loading, error, success, signup };
};

export default useFetch;
