import styles from "./catCard.module.scss";

const CatCard = ({ title, description, image }) => {
  return (
    <div className={styles.card}>
      <div className={styles.card__image}>
        <img src={image} alt="" />
      </div>
      <div>
        <div className={`${styles.card__text} title-item`}>{title}
        <div className="description">{description}</div>
        </div>
      </div>
    </div>
  );
};

export default CatCard;
