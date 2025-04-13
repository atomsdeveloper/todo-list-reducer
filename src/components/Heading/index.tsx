import styles from "./styles.module.css";

type HeadingTypes = {
  size?: "sm" | "md" | "lg";
  children: string;
};

export function Heading({ children, size = "lg" }: HeadingTypes) {
  return <h1 className={`${styles.heading} ${styles[size]}`}>{children}</h1>;
}
