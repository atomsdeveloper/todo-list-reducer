import { StepStateModel } from "../../models/StepsStateModel";
import {
  StepsActionModelWithoutPayload,
  StepsActionsTypes,
} from "./stepsActions";

export function stepsReducer(
  state: StepStateModel, // State
  action: StepsActionModelWithoutPayload // Model
): StepStateModel {
  switch (action.type) {
    case StepsActionsTypes.BACK_STEP_BUTTON: {
      const nextIndex = state.currentIndex;
      const currentIndex = state.backIndex;
      const backIndex = state.backIndex - 1;

      return {
        ...state,
        currentIndex,
        nextIndex,
        backIndex,
      };
    }
    case StepsActionsTypes.NEXT_STEP_BUTTON: {
      const backIndex = state.currentIndex;
      const currentIndex = state.nextIndex;
      const nextIndex = state.nextIndex + 1;

      return {
        ...state,
        currentIndex,
        nextIndex,
        backIndex,
      };
    }
  }
  return state;
}
