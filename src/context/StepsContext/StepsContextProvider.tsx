import { useEffect, useReducer } from "react";
import { initialStateSteps } from "./initialStateSteps";
import { StepsContext } from "./StepsContext";
import { stepsReducer } from "./stepsReducer";

type StepsContextProviderTypes = {
  children: React.ReactNode;
};

export function StepsContextProvider({ children }: StepsContextProviderTypes) {
  const [state, dispatch] = useReducer(stepsReducer, initialStateSteps);

  // Emitir resultado do estado na tela sempre que o state mudar.
  useEffect(() => {}, [state]);

  return (
    <StepsContext.Provider value={{ state, dispatch }}>
      {children}
    </StepsContext.Provider>
  );
}
