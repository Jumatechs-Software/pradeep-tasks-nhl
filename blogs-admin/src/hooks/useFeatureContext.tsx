import { FeatureContext } from "@/contexts/FeatureContext";
import { useContext } from "react";

const useFeatureContext = () => {
  return useContext(FeatureContext);
};

export default useFeatureContext;
