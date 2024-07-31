import { useEffect, useState } from "react";

const useFormError = (defaultState) => {
  const [state, setState] = useState(defaultState);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setState(null);
    }, 3000);

    return () => clearTimeout(timeout);
  }, [state]);

  return [state, setState];
};

export default useFormError;
