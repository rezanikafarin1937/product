import styles from "./myToggle.module.scss";

const Toggle = ({ isFilter, setIsFilter }) => {
  return (
    <button
      type="button"
      className={`${styles.body} ${
        isFilter ? styles.body__active : styles.body__notActive
      }`}
      onClick={() => setIsFilter(!isFilter)}
      title="اعمال فیلترها"
      aria-label="اعمال فیلترها"
      aria-pressed={isFilter}
    >
      <span
        className={`${styles.circle} ${
          isFilter ? styles.circle__active : styles.circle__notActive
        }`}
      />
    </button>
  );
};

export default Toggle;

