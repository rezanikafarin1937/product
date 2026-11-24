import styles from "./benefitCard.module.scss";

const BenefitCard = ({ icon, title, description }) => {
  return (
    <li className={styles.benefitCard} aria-hidden="true">
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
    </li>
  );
};

export default BenefitCard;