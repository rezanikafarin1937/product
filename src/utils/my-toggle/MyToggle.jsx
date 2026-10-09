import styles from "./myToggle.module.scss";

const Toggle = ({ isFilter, setIsFilter }) => {
  return (
    <div
      className={`${styles.body}  ${isFilter ? styles.body__active : styles.body__notActive}`}
      onClick={() => setIsFilter(!isFilter)}
      title="اعمال فیلترها"
    >
      <div
        className={`${styles.circle}  ${isFilter ? styles.circle__active : styles.circle__notActive}`}
      ></div>
    </div>
  );
};

export default Toggle;
