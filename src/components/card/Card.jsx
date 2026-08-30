import { Link } from "react-router-dom";
import ProductDetails from "../../pages/ProductDetails/ProductDetails";
import styles from "./card.module.scss";

const Card = ({ id, title, price, images }) => {
  return (
    <div className={styles.card}>
      <Link to={`/product-details/${id}`}>
        <img
          className={styles.cardImage}
          src={`${process.env.REACT_APP_API_URL}${images[0]}`}
          alt={title}
        />
        <h3>{title}</h3>
        <div>{price}</div>
        <div>id : {id}</div>
      </Link>
    </div>
  );
};

export default Card;
