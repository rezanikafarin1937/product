import { Link } from "react-router-dom";
import styles from "./card-swiper.module.scss";
import Star from "../../utils/star/Star";

const CardSwiper = ({ id, title, price, discount, images }) => {
  const endPrice = (price) => {
    const result = price * (discount / 100);
    return price - result;
  };
  return (
    <section className={`${styles.card} margin-y`}>
      <Link to={`/product-details/${id}`}>
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
          {/* <Star rating={Math.floor(Math.random() * 5)} /> */}
          <Star rating={3} />
          <span className={styles.card__field}>
            {endPrice(price).toLocaleString("fa-IR")}
            <span> تومان </span>
          </span>
          <span className={styles.card__field}>
            {discount !== 0 ? (
              <del className={styles.cardDel}>
                {price.toLocaleString("fa-IR")}{" "}
                <span className={styles.cardDiscount}> تومان </span>
              </del>
            ) : (
              ""
            )}
          </span>
        </div>
      </Link>
    </section>
  );
};

export default CardSwiper;
