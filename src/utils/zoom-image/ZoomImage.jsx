import { useState, useRef, useEffect } from "react";
import HorizontalScroll from "./horizontal-scroll/HorizontalScroll";
import styles from "./zoomimage.module.scss";

const ZoomImage = ({ images }) => {
  const [activeImage, setActiveImage] = useState(0);
  const zoomImage = useRef(null);
  useEffect(() => {
    function handleMouseEnter(e) {
      this.style.backgroundSize = "500%";
    }

    function handleMouseLeave() {
      this.style.backgroundSize = "cover";
      this.style.backgroundPosition = "center";
    }

    function handleMouseMove(e) {
      let x = 100 / (this.offsetWidth / e.offsetX);
      let y = 100 / (this.offsetHeight / e.offsetY);
      this.style.backgroundPosition = `${x}% ${y}%`;
    }

    const el = zoomImage.current;
    if (el) {
      el.addEventListener("mouseenter", handleMouseEnter);
      el.addEventListener("mouseleave", handleMouseLeave);
      el.addEventListener("mousemove", handleMouseMove);
    }
  }, []);

  return (
    <div className={styles.parent}>
      <div className={styles.parent__thumbnails}>
        {images.map((image, index) => (
          <div
            key={index}
            className={`${styles.parent__img} ${index == activeImage ? styles.parent__active : ""}`}
            onClick={() => {
              setActiveImage(() => index);
            }}
          >
            <img
              src={`${process.env.REACT_APP_API_URL}/${image}`}
              alt="فروشگاه لباس پوشانا"
            />
          </div>
        ))}
      </div>
      <div
        ref={zoomImage}
        className={styles.parent__image}
        style={{ backgroundImage: `url(${process.env.REACT_APP_API_URL}/${images[activeImage]})` }}
      ></div>
      <div className={styles.parent__horizontalscroll}>
        <HorizontalScroll gap="1px">
          {images.map((image, index) => (
            <div
              key={index}
              className={styles.parent__img}
              onClick={() => {
                setActiveImage(() => index);
              }}
            >
              <img
                src={`${process.env.REACT_APP_API_URL}/${image}`}
                alt="فروشگاه لباس پوشانا"
              />
            </div>
          ))}
        </HorizontalScroll>
      </div>
    </div>
  );
};

export default ZoomImage;
