import { useEffect, useState } from "react";
import styles from "./banner.module.scss";

const Banner = ({ children }) => {

  const [currentItem, setCurrentItem] = useState(0);
  useEffect(() => {
    const timer = setInterval(() => {
      if (currentItem < children.length - 1) {
        setCurrentItem((prev) => prev + 1);
      } else {
        setCurrentItem(0);
      }
    }, 8000);

    return () => clearInterval(timer);
  }, [currentItem]);


  return (
    <div className={styles.banner}>
      {children?.map((child, index) => (
        <div key={index} className={styles.banner__child} style={index === currentItem ?{opacity : 1} : {}}>{child}</div>
      ))}
    </div>
  );
};

export default Banner;
