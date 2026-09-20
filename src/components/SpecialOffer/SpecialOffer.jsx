import ArrowLeft from "../../icons/arrow-left/ArrowLeft";
import Arrow from "../../icons/arrow/Arrow";
import Button from "../button/Button";
import styles from "./specialOffer.module.scss";

const SpecialOffer = () => {
  return (
    <section className={styles.specialOffer}>
      <div className={styles.specialOffer__content}>
        <h2 className={styles.specialOffer__title}>تخفیف ویژه</h2>

        <p className={styles.specialOffer__description}>
          تا ۳۰٪ تخفیف در تمامی محصولات
        </p>

        <Button>
          <span> مشاهده جزئیات</span>
          <span className="margin-x"></span>
            <ArrowLeft width={20} height={20} color="#fff"/>
        </Button>
      </div>
    </section>
  );
};

export default SpecialOffer;
