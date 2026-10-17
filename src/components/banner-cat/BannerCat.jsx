import man from "./man.png";
import child from "./child.png";
import woman from "./woman.png";
import styles from "./bannerCat.module.scss";

const BannerCat = () => {
  return (
    <div className={styles.banner}>
      <div className={styles.banner__image}>
        <img src={woman} alt="عینک زنانه طبی و آفتابی" />
        <div className={styles.banner__title}>زنانه</div>
      </div>
      <div className={styles.banner__image}>
        <img src={child} alt="عینک بچگانه طبی و آفتابی" />
        <div className={styles.banner__title}>بچگانه</div>
      </div>
      <div className={styles.banner__image}>
        <img src={man} alt="عینک مردانه طبی و آفتابی" />
        <div className={styles.banner__title}>مردانه</div>
      </div>
    </div>
  );
};

export default BannerCat;
