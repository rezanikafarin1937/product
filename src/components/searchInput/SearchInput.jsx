import SearchIcon from "../../icons/searchIcon/SearchIcon";
import styles from "./input.module.scss";

const Input = ({
  onChange,
  type = "search",
  placeholder,
  value,
}) => {
  return (
    <div className={styles.parent}>
      <input
        type={type}
        value={value}
        onChange={onChange}
        className={styles.parent__input}
        placeholder={placeholder}
        aria-label="جستجوی محصول"
      />

      <button
        type="submit"
        className={styles.parent__icon}
        aria-label="جستجو"
      >
        <div className={styles.parent__svg} aria-hidden="true">
          <div style={{ width: "20px", height: "20px" }}>
            <SearchIcon color="var(--color-text-secondary)" />
          </div>
        </div>
      </button>
    </div>
  );
};

export default Input;
