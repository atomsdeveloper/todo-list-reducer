import styles from "./styles.module.css";

type ContentCenterTypes = {
  children: React.ReactNode;
};

export function ContentCenter({ children }: ContentCenterTypes) {
  return <div className={styles.content}>{children}</div>;
}
