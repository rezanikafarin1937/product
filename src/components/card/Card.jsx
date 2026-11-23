import { Link } from "react-router-dom";
import styles from "./card.module.scss";
import Star from "../../utils/star/Star";

const Card = ({ id, title, price, discount, images, state = true }) => {
  const endPrice = (price) => {
    const result = price * (discount / 100);
    return price - result;
  };

  const finalPrice = endPrice(price);

  return (
    <article
      className={`${styles.card} ${
        state ? styles.cardStateA : styles.cardStateB
      } margin-y`}
    >
      <Link to={`/product-details/${id}`} aria-label={`مشاهده جزئیات ${title}`}>
        <div className={styles.cardImage}>
          <img
            src={`${process.env.PUBLIC_URL}${images?.[0]}`}
            alt={title}
            loading="lazy"
            decoding="async"
          />
        </div>

        <div className={styles.cardText}>
          <h3 className="title-item">{title}</h3>
          <Star rating={3} />
          <div>
            <data value={finalPrice}>{finalPrice.toLocaleString("fa-IR")}</data>
            <span> تومان </span>
          </div>
          <div>
            {discount !== 0 && (
              <del className={styles.cardDel}>
                {price.toLocaleString("fa-IR")}
                <span className={styles.cardDiscount}> تومان </span>
              </del>
            )}
          </div>
        </div>
      </Link>
    </article>
  );
};

export default Card;

