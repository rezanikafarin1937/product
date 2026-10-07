import { useRef } from "react";
import styles from "./toggle.module.scss";

const Toggle = ({active,setActive}) => {

  const refToggle = useRef(null);
  const refCircle = useRef(null);

  const handleClick = () => {
    if (!active) {
      refCircle.current.style.transform = "translateX(-30px)";
      refCircle.current.style.border = "2px solid var(--color-primary-dark)"
      refToggle.current.style.backgroundColor = "var(--color-primary-dark)";
    } else if (active) {
      refCircle.current.style.transform = "translateX(0)";
      refCircle.current.style.border = "2px solid var(--color-toggle)"
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
