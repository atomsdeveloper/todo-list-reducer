import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import styles from "./styles.module.css";

import { Button } from "../../components/Button";
import { StepItem } from "../../components/StepItem";

import { useStepsContext } from "../../context/StepsContext/useStepsContext";
import { StepsActionsTypes } from "../../context/StepsContext/stepsActions";

export function Steps() {
  const [isDisabledBack, setIsDisabledBack] = useState<boolean>(false);
  const navigate = useNavigate();

  const { state, dispatch } = useStepsContext();
  const { backIndex, nextIndex } = state;

  function handleClickBack() {
    dispatch({ type: StepsActionsTypes.BACK_STEP_BUTTON });
  }

  function handleClickNext() {
    if (nextIndex === 3) navigate("/steps/login");
    dispatch({ type: StepsActionsTypes.NEXT_STEP_BUTTON });
  }

  useEffect(() => {
    setIsDisabledBack(backIndex === -1);
  }, [backIndex, nextIndex]);

  return (
    <div className={styles.content}>
      <div className={styles.button}>
        <Button
          text="SKIP"
          size="md"
          onClick={() => navigate("login")}
          key={"skip"}
        />
      </div>

      <StepItem
        title={state.steps[state.currentIndex].title}
        description={state.steps[state.currentIndex].description}
        alt={state.steps[state.currentIndex].alt}
        image={state.steps[state.currentIndex].image}
      />

      <div className={styles.button}>
        <Button
          text="BACK"
          size="md"
          onClick={handleClickBack}
          disabled={isDisabledBack}
          key={"back"}
        />
        <Button
          text="NEXT"
          size="md"
          onClick={handleClickNext}
          key={"next"}
          bg={true}
        />
      </div>
    </div>
  );
}
