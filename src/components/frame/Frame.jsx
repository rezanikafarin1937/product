import styles from "./frame.module.scss";

const colors = ["black", "gray", "white", "green", "blue", "brown", "red"];
const titles = ["مشکی", "خاکستری", "سفید", "سبز", "آبی", "قهوه ای", "قرمز"];

const Frame = ({selectFrame,setSelectFrame}) => {

  return (
    <>
      <div className={styles.frame}>
        {colors.map((color, index) => (
          <div key={index}  className={titles[index] === selectFrame ? styles.frame__border : {}} title={titles[index]} onClick={() => setSelectFrame(titles[index])}
          >
            <div className={`${styles.frame__circle} ${styles[color]}`}></div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Frame;


