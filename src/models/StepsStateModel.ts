import { StepsModel } from "./StepsModel";

export type StepStateModel = {
  steps: StepsModel[];
  currentIndex: number;
  nextIndex: number | null;
  backIndex: number | null;
};
