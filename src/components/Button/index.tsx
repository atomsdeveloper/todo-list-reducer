import styles from "./styles.module.css";

type ButtonProps = {
  text: string;
  size: "sm" | "md" | "lg";
  bg?: boolean;
} & React.ComponentProps<"button">;

export function Button({ text, size = "lg", bg, ...props }: ButtonProps) {
  return (
    <button
      className={`
        ${styles.button} 
        ${bg ? styles.background : ""} 
        ${styles[size]}
      `}
      {...props}
    >
      {text}
    </button>
  );
}
