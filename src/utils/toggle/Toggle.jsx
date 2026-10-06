import { useRef, useState } from "react";
import styles from "./toggle.module.scss";

const Toggle = () => {
  const [active, setActive] = useState(false);

  const refToggle = useRef(null);
  const refCircle = useRef(null);

  const handleClick = () => {
    if (!active) {
      refCircle.current.style.transform = "translateX(-30px)";
      refToggle.current.style.backgroundColor = "var(--color-primary-dark)";
    } else if (active) {
      refCircle.current.style.transform = "translateX(0)";
      refToggle.current.style.backgroundColor = "var(--color-toggle)";
    }
    setActive(!active);
  };
  return (
    <div
      className={styles.parent}
      ref={refToggle}
      onClick={() => handleClick()}
    >
      <div className={styles.parent__circle} ref={refCircle}></div>
    </div>
  );
};

export default Toggle;
