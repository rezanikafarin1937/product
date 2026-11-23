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
    const totalPrice = qty * (price - price * (discount / 100));
    return (
      <>
        <data value={totalPrice}>{totalPrice.toLocaleString("fa-IR")}</data>
        <span> تومان </span>
      </>
    );
  };

  const report = () => {
    return (
      <div className={styles.cart__report}>
        <article>
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
        </article>
      </div>
    );
  };

  const image = () => {
    return (
      <div className={styles.cart__image}>
        <img
          src={`${process.env.PUBLIC_URL}${images?.[0]}`}
          alt={title}
          loading="lazy"
          decoding="async"
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
        <Button variant="number"  aria-label={`تعداد ${title}`}>
          {getProductQty(id).toLocaleString("fa-IR")}
        </Button>
        <Button variant="number" onClick={() => handleDecreaseProductQty(id)}>
          -
        </Button>
      </div>
    );
  };

  return (
    <section className={styles.cart}>
      <div className={styles.cart__right}>
        {image()}
        <span className={styles.cart__qtyReport}>
          {qty.toLocaleString("fa-IR")}
        </span>
        <div className={styles.cart__info}>{report()}</div>
      </div>

      <div className={styles.cart__qty}>
        <span className={`${styles.cart__price} title-item`}>
          {calcPrice()}
        </span>
        <span className="margin-y"></span>
        {btns()}
        <div className={styles.cart__qtyDel}>
          <button
            type="button"
            aria-label={`حذف ${title} از سبد خرید`}
            onClick={() => handleRemoveProduct(id)}
          >
            <CloseIcon width={20} height={20} color="var(--color-text)" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default CartItem;
