import { StepStateModel } from "../../models/StepsStateModel";
import { StepsActionModelWithPayload, StepsActionsTypes } from "./stepsActions";

export function stepsReducer(
  state: StepStateModel, // State
  action: StepsActionModelWithPayload // Model
): StepStateModel {
  switch (action.type) {
    case StepsActionsTypes.NEXT_STEP_BUTTON:
      return state;
  }
  return state;
}
