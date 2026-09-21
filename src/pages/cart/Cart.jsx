import { useCartContext } from "../../context/CartContext";
import CartItem from "../../components/cartItem/CartItem";
import styles from "./Cart.module.scss";
import Button from "../../components/button/Button";

const Cart = () => {
  const {
    cartItems,
    totalPrice,
    cartQty,
    totalPriceWithoutDiscount,
    totalDiscount,
  } = useCartContext();

  return (
    <div className={`${styles.cart} wrapper`}>
      <h1 className="primary-title">سبد خرید</h1>
      {cartItems.map((item) => (
        <CartItem key={item.id} {...item} />
      ))}

      <div className="title-bar">
        <span className="title-item">
          <span>قیمت کل</span> <span>({cartQty.toLocaleString("fa-IR")})</span>{" "}
          <span>کالا</span>{" "}
        </span>
        <span className="title-item">
          {totalPriceWithoutDiscount(cartItems).toLocaleString("fa-IR")}
          <span style={{ marginRight: ".5rem" }}>تومان</span>
        </span>
      </div>
      <div className="title-bar">
        <span className="title-item">تخفیف</span>
        <span className="title-item" style={{color : "var(--color-text-blue)"}}>
          <span>{totalDiscount(cartItems).toLocaleString("fa-IR")}</span>
          <span style={{ marginRight: ".5rem" }}>تومان</span>
        </span>
      </div>
      <div className="title-bar">
        <span className="primary-title">مبلغ قابل پرداخت</span>
        <span className="title-item" style={{color : "var(--color-primary-dark)"}}>
          <span>{totalPrice.toLocaleString("fa-IR")}</span>
          <span style={{ marginRight: ".5rem" }}>تومان</span>{" "}
        </span>
      </div>

      <Button style={{ width: "100%" }}>ادامه فرآیند خرید</Button>
    </div>
  );
};

export default Cart;
