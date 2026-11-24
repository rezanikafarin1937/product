import styles from "./button.module.scss";

const Button = ({
  children,
  variant = "primary",
  onClick,
  width = "",
  type = "button",
  ...rest
}) => {
  return (
    <button
      type={type}
      style={width !== "" ? { width } : {}}
      className={`${styles.button} ${styles[variant] || ""}`}
      onClick={onClick}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;

