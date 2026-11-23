
import { Link } from "react-router-dom";
import styles from "./Accessories.module.scss";
import AccessoriesImage from "./Accessories.jfif";

const Accessories = () => {
  return (
    <section
      className={styles.accessories}
      aria-labelledby="accessories-title"
    >
      <div className={styles.accessories__content}>
        <span className={styles.accessories__subtitle}>
          لوازم جانبی تیزبین
        </span>

        <h2
          id="accessories-title"
          className={styles.accessories__title}
        >
          جزئیات کوچک، تجربه‌ای کامل‌تر
        </h2>

        <p className={styles.accessories__text}>
          برای مراقبت بهتر از عینک و تکمیل استایل خود، انتخابی متفاوت داشته باشید.
        </p>

        <Link
          to="/accessories"
          className={styles.accessories__button}
        >
          مشاهده لوازم جانبی
        </Link>
      </div>

      <div className={styles.accessories__image}>
        <img
          src={AccessoriesImage}
          alt="لوازم جانبی عینک تیزبین"
          loading="lazy"
          decoding="async"
        />
      </div>
    </section>
  );
};

export default Accessories;
