import { useCartContext } from "../../context/CartContext";
import Button from "../button/Button";
import CloseIcon from "../../icons/close-icon/CloseIcon";
import styles from "./cartItem.module.scss";

const CartItem = ({ id, qty, price, discount, title, description, images }) => {
  const {
    handleIncreaseProductQty,
    handleDecreaseProductQty,
    getProductQty,
    handleRemoveProduct,
  } = useCartContext();

  const calcPrice = () => {
    return (
      <>
        <span>
          {(qty * (price - price * (discount / 100)))?.toLocaleString("fa-IR")}
        </span>
        <span> تومان </span>
      </>
    );
  };

  const report = () => {
    return (
      <div className={styles.cart__report}>
        <div>
          <h3 className="title-item">{title}</h3>

          <div className={styles.cart__details}>
            <div>
              <span>قیمت : </span> <del>{price?.toLocaleString("fa-IR")}</del>{" "}
              <span>تومان</span>
            </div>
            <div>
              <span> تخفیف : </span> {discount?.toLocaleString("fa-IR")}
              <span className="margin-x">درصد </span>
            </div>
            <div>
              <span>قیمت نهایی :</span> {calcPrice()}
            </div>
          </div>
        </div>
      </div>
    );
  };

  const image = () => {
    return (
      <div className={styles.cart__image}>
        <img
          src={`${process.env.REACT_APP_API_URL}${images?.[0]}`}
          alt={title}
        />
      </div>
    );
  };

  const btns = () => {
    return (
      <div style={{ display: "flex" }}>
        <Button
          variant="number"
          onClick={() =>
            handleIncreaseProductQty({
              id,
              qty,
              price,
              discount,
              title,
              description,
              images,
            })
          }
        >
          +
        </Button>
        <Button variant="number">
          {getProductQty(id).toLocaleString("fa-IR")}
        </Button>
        <Button variant="number" onClick={() => handleDecreaseProductQty(id)}>
          -
        </Button>
      </div>
    );
  };

  return (
      <div className={styles.cart}>
        <div className={styles.cart__right}>
          {image()}
          <div className={styles.cart__qtyReport}>
            {qty.toLocaleString("fa-IR")}
          </div>
          <div className={styles.cart__info}>{report()}</div>
        </div>

        <div className={styles.cart__qty}>
          <div className={`${styles.cart__price} title-item`}>
            {calcPrice()}
          </div>
          <span className="margin-y"></span>
          {btns()}
          <div className={styles.cart__qtyDel}>
            <div onClick={() => handleRemoveProduct(id)}>
              <CloseIcon width={20} height={20} color="var(--color-text)" />
            </div>
          </div>
        </div>
      </div>
  );
};

export default CartItem;
