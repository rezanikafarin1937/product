import { useId } from "react";
import styles from "./input.module.scss";

const Input = ({
  onChange,
  onKeyDown,
  type,
  placeholder,
  value,
}) => {

  const uniqueId = useId();
  return (
    <input
      id ={uniqueId}
      type={type}
      value={value}
      onChange={onChange}
      onKeyDown={onKeyDown}
      className={styles.input}
      placeholder={placeholder}
    />
  );
};

export default Input;





