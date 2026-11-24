import styles from "./shapFrame.module.scss";

const shapes = ["گرد", "مستطیل", "مربع", "بیضی", "گربه ای"];

const ShapeFrame = ({ selectShape, setSelectShape }) => {
  return (
    <div className={styles.frame} role="group" aria-label="انتخاب شکل فریم">
      {shapes.map((shape) => (
        <button
          type="button"
          key={shape}
          onClick={() => setSelectShape(shape)}
          aria-pressed={shape === selectShape}
          className={`${styles.frame__shape} ${
            shape === selectShape ? styles.frame__select : ""
          }`}
        >
          {shape}
        </button>
      ))}
    </div>
  );
};

export default ShapeFrame;
