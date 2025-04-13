import styles from "./styles.module.css";

type ContainerStepsTypes = {
  children: React.ReactNode;
};

export function ContainerSteps({ children }: ContainerStepsTypes) {
  return <div className={styles.container}>{children}</div>;
}
