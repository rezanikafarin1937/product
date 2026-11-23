
import { useId } from "react";
import styles from "./input.module.scss";

const Input = ({
  onChange,
  onKeyDown,
  type = "text",
  placeholder,
  value,
  name,
  autoComplete,
  required = false,
  ariaLabel,
}) => {
  const uniqueId = useId();

  return (
    <input
      id={uniqueId}
      name={name}
      type={type}
      value={value}
      onChange={onChange}
      onKeyDown={onKeyDown}
      className={styles.input}
      placeholder={placeholder}
      autoComplete={autoComplete}
      required={required}
      aria-label={ariaLabel || placeholder}
    />
  );
};

export default Input;
