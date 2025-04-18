export enum StepsActionsTypes {
  NEXT_STEP_BUTTON = "NEXT_STEP_BUTTON",
  BACK_STEP_BUTTON = "BACK_STEP_BUTTON",
  SKIP_STEP_BUTTON = "SKIP_STEP_BUTTON",
}

// Tipagem dos types que possuem payload.
export type StepsActionModelWithPayload =
  | {
      type: StepsActionsTypes.NEXT_STEP_BUTTON;
      payload: { secondsRemmaning: number };
    }
  | {
      type: StepsActionsTypes.BACK_STEP_BUTTON;
      payload: { secondsRemmaning: number };
    }
  | {
      type: StepsActionsTypes.SKIP_STEP_BUTTON;
      payload: { secondsRemmaning: number };
    };
