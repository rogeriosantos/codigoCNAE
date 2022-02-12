import { useCallback, useState, useEffect } from 'react';

export default function useCnae() {
  const [data, setData] = useState([]);

  const fetchData = useCallback(async () => {
    try {
      const response = await fetch(
        'https://servicodados.ibge.gov.br/api/v2/cnae/classes/'
      );
      const json = await response.json();
      setData(json);
    } catch (error) {
      console.log(error);
    }
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return data;
}
