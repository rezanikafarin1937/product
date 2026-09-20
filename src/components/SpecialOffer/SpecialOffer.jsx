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
          <div style={{transform : "rotate(180deg)"}}>
            <Arrow width={20} height={20} color="#fff"/>
          </div>
        </Button>
      </div>
    </section>
  );
};

export default SpecialOffer;
