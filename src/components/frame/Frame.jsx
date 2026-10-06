import { useNavigate } from "react-router-dom";
import styles from "./frame.module.scss";
import { useState } from "react";

const colors = ["black", "gray", "white", "green", "blue", "brown", "red"];
const titles = ["مشکی", "خاکستری", "سفید", "سبز", "آبی", "قهوه ای", "قرمز"];

const Frame = () => {
  const [select,setSelect] = useState(null);
  const navigate = useNavigate();
  const handleClick = (index) => {
    setSelect(index);
    // console.log("colorTitle = ", colorTitle);
    // navigate(`/search?title=${encodeURIComponent(colorTitle)}`);
  };

  return (
    <>
      <div className={styles.frame}>
        {colors.map((color, index) => (
          <div key={index}  className={index === select ? styles.frame__border : {}} title={titles[index]} onClick={() => handleClick(index)}
          >
            <div className={`${styles.frame__circle} ${styles[color]}`}></div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Frame;


