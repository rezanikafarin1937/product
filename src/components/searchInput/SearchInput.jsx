import SearchIcon from "../../icons/searchIcon/SearchIcon";
import styles from "./input.module.scss";

const Input = ({
  onChange,
  onKeyDown,
  type,
  placeholder,
  value,
  onClickSearch,
}) => {
  return (
    <div className={styles.parent}>
      <input
        type={type}
        value={value}
        onChange={onChange}
        onKeyDown={onKeyDown}
        className={styles.parent__input}
        placeholder={placeholder}
      />
      <div className={styles.parent__icon} onClick={onClickSearch}>
        <div className={styles.parent__svg}>
          <SearchIcon color="#ddd"/>
        </div>
      </div>
    </div>
  );
};

export default Input;
