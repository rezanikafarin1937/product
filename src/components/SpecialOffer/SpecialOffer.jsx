import styles from "./specialOffer.module.scss";

const SpecialOffer = () => {
  return (
    <section className={styles.specialOffer}>
      <div className={styles.specialOffer__content}>
        <h2 className={styles.specialOffer__title}>
          تخفیف ویژه
        </h2>

        <p className={styles.specialOffer__description}>
          تا ۳۰٪ تخفیف در تمامی محصولات
        </p>

        <button className={styles.specialOffer__button}>
          مشاهده جزئیات
        </button>
      </div>
    </section>
  );
};

export default SpecialOffer;