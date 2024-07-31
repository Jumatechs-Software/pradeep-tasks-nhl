import { useEffect, useState } from "react";

const useFormError = <T,>(
  defaultState: T | null = null
): [T | null, React.Dispatch<React.SetStateAction<T | null>>] => {
  const [state, setState] = useState<T | null>(defaultState);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setState(null);
    }, 3000);

    return () => clearTimeout(timeout);
  }, [state]);

  return [state, setState];
};

export default useFormError;
