import { useNavigate } from "react-router-dom";
import styles from "./frame.module.scss";

const colors = ["black", "gray", "white", "green", "blue", "brown", "red"];
const titles = ["مشکی", "خاکستری", "سفید", "سبز", "آبی", "قهوه ای", "قرمز"];

const Frame = () => {
  const navigate = useNavigate();
  const handleClick = (colorTitle) => {
    console.log("colorTitle = ", colorTitle);
    navigate(`/search?title=${encodeURIComponent(colorTitle)}`);
  };

  return (
    <>
        <div className={styles.frame__title}>رنگ فریم</div>
      <div className={styles.frame}>
        {colors.map((color, index) => (
          <div
            key={index}
            className={`${styles.frame__circle} ${styles[color]}`}
            title={titles[index]}
            onClick={() => handleClick(titles[index])}
          />
        ))}
      </div>
    </>
  );
};

export default Frame;
