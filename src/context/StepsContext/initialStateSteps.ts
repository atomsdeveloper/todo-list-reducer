import { StepStateModel } from "../../models/StepsStateModel";

export const initialStateSteps: StepStateModel = {
  steps: [
    {
      title: "Manage your tasks",
      description:
        "You can easily manage all of your daily tasks in DoMe for free",
      alt: "Image Manage Task",
      image: "./images/manage-task.png",
    },
    {
      title: "Create daily routinev",
      description:
        "In Uptodo  you can create your personalized routine to stay productive",
      alt: "Image Create Routine",
      image: "./images/create-routine.png",
    },
    {
      title: "Orgonaize your tasks",
      description:
        "In Uptodo  you can create your personalized routine to stay productive",
      alt: "Image Organize Task",
      image: "./images/organize-task.png",
    },
  ],
  backIndex: -1,
  currentIndex: 0,
  nextIndex: 1,
};
