import { useCartContext } from "../../context/CartContext";
import CartIcon from "../../icons/cart-icon/CartIcon";
import styles from "./buttonCart.module.scss";
import { Link } from "react-router-dom";

const ButtonCart = () => {
  const { cartQty } = useCartContext();

  return (
    <Link to="/cart">
      <div title="سبد خرید" className={styles.btn}>
        <div className={styles.btnCounter}>{cartQty}</div>
        <CartIcon width={20} height={20} color="var(--color-text)" />
      </div>
    </Link>
  );
};

export default ButtonCart;
