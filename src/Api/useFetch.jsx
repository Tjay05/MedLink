import { useState, useEffect } from "react";

const useFetch = (url, method, headers, body) => {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url, {
          method,
          headers,
          body: JSON.stringify(body),
        });

        if (!response.ok) {
          throw new Error("Could not fetch data");
        }

        const responseData = await response.json();
        setData(responseData);
        setIsPending(false);
        setError(null);
      } catch (error) {
        setError(error.message);
        setIsPending(false);
      }
    };

    fetchData();
  }, [url, method, headers, body]);

  return { data, isPending, error };
};

export default useFetch;
