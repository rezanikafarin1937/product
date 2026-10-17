import styles from "./button.module.scss";

const Button = ({
  children,
  variant = "primary",
  onClick,
  width = "",
  ...rest
}) => {
  return (
    <button
      style={width !== "" ? {width : width} : {}}
      className={`${styles.button} ${styles[variant]}`}
      onClick={onClick}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
