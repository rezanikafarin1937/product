import styles from "./myToggle.module.scss";

const Toggle = ({ active, setActive }) => {
  return (
    <div
      className={`${styles.body}  ${active ? styles.body__active : styles.body__notActive}`}
      onClick={() => setActive(!active)}
    >
      <div
        className={`${styles.circle}  ${active ? styles.circle__active : styles.circle__notActive}`}
      ></div>
    </div>
  );
};

export default Toggle;
