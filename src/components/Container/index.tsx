import styles from "./styles.module.css";

type ContainerTypes = {
  children: React.ReactNode;
};

export function Container({ children }: ContainerTypes) {
  return <div className={styles.container}>{children}</div>;
}
