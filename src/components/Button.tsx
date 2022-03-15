import { ButtonHTMLAttributes } from "react";

import styles from "styles/Button.module.scss";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  isSecondary?: boolean;
};

export default function Button({ isSecondary = false, ...props }: ButtonProps) {
  return (
    <button
      className={`${styles.button} ${isSecondary ? styles.secondary : ""}`}
      {...props}
    />
  );
}
