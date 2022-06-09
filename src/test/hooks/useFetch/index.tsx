import axios from 'axios';
import { useState, useEffect } from 'react';

export type useFetchReturnType<T> = {
  data: T;
};

const useFetch = <T,>(url: string): useFetchReturnType<T> => {
  const [data, setData] = useState<T>({} as T);

  useEffect(() => {
    const fetchData = async (url: string) => {
      const res = await axios.get<T>(url);
      setData(res.data);
    };
    fetchData(url);
  }, [url]);

  return { data };
};

export default useFetch;
