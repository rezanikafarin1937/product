import styles from "./benefitCard.module.scss";

const BenefitCard = ({ icon, title, description }) => {
  return (
    <div className={styles.benefitCard}>
      <div className={styles.benefitCard__icon}>
        {icon}
      </div>
      <span className="margin-x"></span>
      <div className={styles.benefitCard__content}>
        <h3 className={styles.benefitCard__title}>
          {title}
        </h3>

        <p className={styles.benefitCard__description}>
          {description}
        </p>
      </div>
    </div>
  );
};

export default BenefitCard;