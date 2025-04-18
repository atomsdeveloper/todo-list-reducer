import { createContext } from "react";
import { initialStateSteps } from "./initialStateSteps";
import { StepsActionModelWithPayload } from "./stepsActions";
import { StepStateModel } from "../../models/StepsStateModel";

type StepsContextTypes = {
  state: StepStateModel;
  dispatch: React.Dispatch<StepsActionModelWithPayload>;
};

const initialContextValue = {
  state: initialStateSteps,
  dispatch: () => {},
};

export const StepsContext =
  createContext<StepsContextTypes>(initialContextValue);
