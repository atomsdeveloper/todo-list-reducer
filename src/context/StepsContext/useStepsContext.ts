import { useContext } from "react";
import { StepsContext } from "./StepsContext";

export function useStepsContext() {
  return useContext(StepsContext);
}
