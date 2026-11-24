import styles from "./usage.module.scss";

const shapes = ["طبی", "آفتابی", "ورزشی", "لوازم جانبی"];

const Usage = ({ selectUsage, setSelectUsage }) => {
  return (
    <div className={styles.frame} role="group" aria-label="انتخاب کاربرد عینک">
      {shapes.map((shape) => (
        <button
          type="button"
          key={shape}
          onClick={() => setSelectUsage(shape)}
          aria-pressed={shape === selectUsage}
          className={`${styles.frame__shape} ${
            shape === selectUsage ? styles.frame__select : ""
          }`}
        >
          {shape}
        </button>
      ))}
    </div>
  );
};

export default Usage;

