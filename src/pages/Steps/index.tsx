import styles from "./styles.module.css";

import { Button } from "../../components/Button";
import { StepItem } from "../../components/StepItem";

import { useStepsContext } from "../../context/StepsContext/useStepsContext";

export function Steps() {
  const { state, dispatch } = useStepsContext();
  console.log(state, dispatch);

  // Aqui deverá ser renderizado um step de acordo com o indice atual do Array de Objetos.
  return (
    <div className={styles.content}>
      {/* Não precisar receber os dados do Array de Objetos pois é o mesmo componente indepentemente do conteúdo atual. */}
      <div className={styles.button}>
        <Button text="SKIP" size="md" />
      </div>

      {/* Deverá receber os dados de um Array de Objetos com os conteúdos dá página atual */}
      {/* Dados -> title, description, image, alt */}
      {/* Após receber os dados deverá ser rendeizado meu componente StepItem */}
      <StepItem
        title={state.steps[state.currentIndex].title}
        description={state.steps[state.currentIndex].description}
        alt={state.steps[state.currentIndex].alt}
        image={state.steps[state.currentIndex].image}
      />

      <div className={styles.button}>
        <Button text="BACK" size="md" />
        <Button text="NEXT" size="md" />
      </div>
    </div>
  );
}
