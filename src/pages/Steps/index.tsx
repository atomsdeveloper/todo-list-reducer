import styles from "./styles.module.css";

import { Button } from "../../components/Button";

export function Steps() {
  // Aqui deverá ser renderizado um slide com os conteúdos do steps
  return (
    <h1 className={styles.content}>
      <div className={styles.buttonSkipContainer}>
        <Button text="SKIP" size="md" />
      </div>

      {/* DEVERA SER RENDERIZADO MINHAS STEPS ITEMS */}

      <div>
        <p>Button Back and Next</p>
      </div>
    </h1>
  );
}
