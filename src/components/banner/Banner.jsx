import { useEffect, useState } from "react";
import styles from "./banner.module.scss";
import Button from "../button/Button";
import ArrowLeft from "../../icons/arrow-left/ArrowLeft";
import { useNavigate } from "react-router-dom";

const Banner = ({ children }) => {
  const [currentItem, setCurrentItem] = useState(0);
  const navigate = useNavigate();

  const handleClick = () =>{
    navigate("/store")
  }
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
        <div
          key={index}
          className={styles.banner__child}
          style={index === currentItem ? { opacity: 1 } : {}}
        >
          {child}
        </div>
      ))}
      <div className={styles.bannerButton}>
        <Button onClick={handleClick}>
          <span>مشاهده محصولات</span>
          <span className="margin-x"></span>
            <ArrowLeft  width={20} height={20} color="#fff" />
        </Button>
      </div>
    </div>
  );
};

export default Banner;
