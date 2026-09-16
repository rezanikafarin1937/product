import styles from "./benefitCard.module.scss";

const BenefitCard = ({ icon, title, description }) => {
  return (
    <div className={styles.benefitCard}>
      <div className={styles.benefitCard__icon}>
        {icon}
      </div>
      <span className="margin-x"></span>
      <div className={styles.benefitCard__content}>
        <h3 className="title-item">
          {title}
        </h3>

        <p className="description">
          {description}
        </p>
      </div>
    </div>
  );
};

export default BenefitCard;