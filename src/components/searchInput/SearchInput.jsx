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
          <div style={{width : "20px" , height : "20px"}}>
            <SearchIcon color="var(--color-text-secondary)" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Input;
