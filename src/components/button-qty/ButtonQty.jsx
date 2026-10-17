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
    handleRemoveProduct,
  } = useCartContext();

  return (
    <div className={styles.btns}>
      <span
        className={styles.btns__btn}
        onClick={() => handleDecreaseProductQty(id)}
      >
        -
      </span>
      <span className={styles.btns__btn}>
        {getProductQty(id).toLocaleString("fa-IR")}
      </span>
      <span
        className={styles.btns__btn}
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
      </span>
    </div>
  );
};

export default ButtonQty;
