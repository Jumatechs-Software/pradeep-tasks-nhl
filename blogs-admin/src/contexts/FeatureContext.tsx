import { createContext, useState } from "react";

export type initialFeatureContextStateType = {
  showAlert: boolean;
  alertText: string;
  alertSuccess: boolean;
  isLoading: boolean;
};

export type FeatureContextType = {
  state: initialFeatureContextStateType;
  displayAlert: (text: string, success?: boolean) => void;
  setIsLoading: (loading: boolean) => void;
};

const initialState: initialFeatureContextStateType = {
  showAlert: false,
  alertText: "",
  alertSuccess: false,
  isLoading: true,
};

const initialContextValue: FeatureContextType = {
  state: initialState,
  displayAlert: () => {},
  setIsLoading: () => {},
};

export const FeatureContext =
  createContext<FeatureContextType>(initialContextValue);

const FeatureProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, setState] = useState(initialState);

  const clearAlert = () => {
    setTimeout(() => {
      setState((prev) => ({
        ...prev,
        showAlert: false,
        alertText: "",
      }));
    }, 3000);
  };

  /**
   *
   * @param alertText The message to display
   * @param Success alert type => if true, green ||, red alert
   */

  const displayAlert = (alertText: string, success: boolean = false) => {
    setState((prev) => ({
      ...prev,
      showAlert: true,
      alertSuccess: success,
      alertText: alertText ?? "",
    }));
    clearAlert();
  };

  /**
   *
   * @param isLoading if true show the alert else hide the alert
   */

  const setIsLoading = (isLoading: boolean) => {
    setState((prev) => ({
      ...prev,
      isLoading: isLoading,
    }));
  };

  return (
    <FeatureContext.Provider
      value={{
        state,
        setIsLoading,
        displayAlert,
      }}
    >
      {children}
    </FeatureContext.Provider>
  );
};

export default FeatureProvider;
