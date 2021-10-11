import { useState, useEffect } from 'react';

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setTimeout(() => {
    fetch(url)
      .then(res => {
          if (!res.ok) {
              throw Error('could not fetch customer groups');
          }
          return res.json();
        })
      .then(data => {
          setIsPending(false);
          setData(data);
          setError(null);
      }) 
      .catch(error => {
          console.error('Trouble getting user');

          setIsPending(false);
          setError(error.message);
      })
    
      }, 1000);
  }, [url])

  return { data, isPending, error };
}

export default useFetch; 