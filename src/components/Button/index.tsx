import styles from "./styles.module.css";

type ButtonProps = {
  text: string;
  size: "sm" | "md" | "lg";
} & React.ComponentProps<"button">;

export function Button({ text, size = "lg", ...props }: ButtonProps) {
  return (
    <button className={`${styles.button} ${styles[size]}`} {...props}>
      {text}
    </button>
  );
}
