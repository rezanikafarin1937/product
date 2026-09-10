import styles from "./input.module.scss";

const Input = ({
  onChange,
  onKeyDown,
  type,
  placeholder,
  value,
}) => {
  return (
    <input
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





