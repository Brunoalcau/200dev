import { useEffect, useState } from 'react';

export const useStore = <T, F>(
  store: (callback: (state: T) => unknown) => unknown,
  callback: (state: T) => F
) => {
  const result = store(callback) as F;
  // Inicializando o estado com 'result'
  const [data, setData] = useState<F>(result);

  useEffect(() => {
    setData(result);
  }, [result]);

  return data;
};
