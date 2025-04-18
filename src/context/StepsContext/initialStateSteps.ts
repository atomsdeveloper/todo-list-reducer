import { StepStateModel } from "../../models/StepsStateModel";

export const initialStateSteps: StepStateModel = {
  steps: [
    {
      title: "Teste",
      description:
        "You can easily manage all of your daily tasks in DoMe for free",
      alt: "Image Manage Task",
      image: "./images/manage-task.png",
    },
    {
      title: "Teste",
      description:
        "In Uptodo  you can create your personalized routine to stay productive",
      alt: "Image Create Routine",
      image: "./images/create-routine.png",
    },
    {
      title: "Teste",
      description:
        "In Uptodo  you can create your personalized routine to stay productive",
      alt: "Image Organize Task",
      image: "./images/organize-task.png",
    },
  ],
  currentIndex: 0,
  nextIndex: 1,
  backIndex: null,
};
