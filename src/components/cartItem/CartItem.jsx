import { useCartContext } from "../../context/CartContext";
import Button from "../button/Button";
import styles from "./cartItem.module.scss";

const CartItem = ({ id, qty ,price,discount,title,description,images }) => {
  const {
    handleIncreaseProductQty,
    handleDecreaseProductQty,
    getProductQty,
    handleRemoveProduct,
  } = useCartContext();

 
  return (
    <div className={styles.cart}>
      <div className={styles.cart__image}>
        <img
          src={`${process.env.REACT_APP_API_URL}${images?.[0]}`}
          alt={title}
        />
      </div>
      <div>
        <h3>{title}</h3>
        <div>
          <span>قیمت : </span> <del>{price?.toLocaleString("fa-IR")}</del> <span>تومان</span>
        </div>
        <div>
          <span>با تخفیف : </span> {discount?.toLocaleString("fa-IR")} <span>درصد </span>
          <span>میشود </span>
          <span>{(price - (price * (discount / 100))).toLocaleString("fa-IR")}</span>
          <span> تومان  </span>
        </div>
        <div><span>برای تعداد </span> <span> {qty?.toLocaleString("fa-IR")} </span> <span> عدد میشود </span> <span>{(qty * (price - (price * (discount / 100))))?.toLocaleString("fa-IR")}</span> <span> تومان </span></div>
        <div>
          <span>توضیحات : </span> {description}
        </div>
        <br />
        <div>
          <Button onClick={() => handleRemoveProduct(id)}>حذف</Button>
          <span className="margin-x"></span>
          <Button onClick={() => handleIncreaseProductQty({ id, qty ,price,discount,title,description,images })}>+</Button>
          <span className="margin-x">{getProductQty(id)}</span>
          <Button onClick={() => handleDecreaseProductQty(id)}>-</Button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
