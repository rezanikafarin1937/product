import styles from "./card.module.scss";
const Card = ({ title, price, images }) => {
  return (
    <div className={styles.card}>
      <img className={styles.cardImage} src={`${process.env.REACT_APP_API_URL}${images[0]}`} alt={title} />
      <h3>{title}</h3>
      <div>{price}</div>
    </div>
  );
};

export default Card;
