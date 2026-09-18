import { Link } from "react-router-dom";
import styles from "./card.module.scss";
import Star from "../../utils/star/Star";

const Card = ({ id, title, price, discount, images }) => {
  const endPrice = (price) => {
    const result = price * (discount / 100);
    return price - result;
  };
  return (
    <div className={`${styles.card} margin-y`}>
      <Link to={`/product-details/${id}`}>
        <div className={styles.cardImage}>
          <img
            src={`${process.env.REACT_APP_API_URL}${images?.[0]}`}
            alt={title}
          />
        </div>
        <div className={styles.cardText}>
          <h3 className="title-item">{title}</h3>
          <Star rating={Math.floor(Math.random() * 5)}/>
          <div>
            {endPrice(price).toLocaleString("fa-IR")}
            <span> تومان </span>
            {discount !== 0 ? (
              <del className={styles.cardDel}>
                {price.toLocaleString("fa-IR")} <span className={styles.cardDiscount}> تومان </span>
              </del>
            ) : (
              ""
            )}
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Card;
