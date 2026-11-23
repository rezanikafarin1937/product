
import { useCartContext } from "../../context/CartContext";
import styles from "./button-qty.module.scss";

const ButtonQty = ({
  id,
  qty,
  price,
  discount,
  title,
  description,
  images,
}) => {
  const {
    handleIncreaseProductQty,
    handleDecreaseProductQty,
    getProductQty,
  } = useCartContext();

  return (
    <div className={styles.btns}>
      <button
        type="button"
        className={styles.btns__btn}
        aria-label={`کاهش تعداد ${title}`}
        onClick={() => handleDecreaseProductQty(id)}
      >
        -
      </button>

      <span
        className={styles.btns__btn}
        aria-live="polite"
        aria-atomic="true"
      >
        {getProductQty(id).toLocaleString("fa-IR")}
      </span>

      <button
        type="button"
        className={styles.btns__btn}
        aria-label={`افزایش تعداد ${title}`}
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
      </button>
    </div>
  );
};

export default ButtonQty;

