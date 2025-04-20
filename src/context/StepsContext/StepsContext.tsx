import { createContext } from "react";
import { initialStateSteps } from "./initialStateSteps";
import { StepsActionModelWithoutPayload } from "./stepsActions";
import { StepStateModel } from "../../models/StepsStateModel";

type StepsContextTypes = {
  state: StepStateModel;
  dispatch: React.Dispatch<StepsActionModelWithoutPayload>;
};

const initialContextValue = {
  state: initialStateSteps,
  dispatch: () => {},
};

export const StepsContext =
  createContext<StepsContextTypes>(initialContextValue);
