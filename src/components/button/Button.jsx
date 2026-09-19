import styles from "./button.module.scss";

const Button = ({
  children,
  variant = "primary",
  onClick,
  ...rest
}) => {
  return (
    <button
      className={`${styles.button} ${styles[variant]}`}
      onClick={onClick}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
