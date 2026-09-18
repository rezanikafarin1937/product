import { useCartContext } from "../../context/CartContext"
import CartItem from "../../components/cartItem/CartItem";
import styles from "./Cart.module.scss"

const Cart = () => {
    const {cartItems,totalPrice} = useCartContext();
    return (
    <div className="wrapper">
        <h1>Cart Page</h1>
        {cartItems.map((item) => (
            <CartItem key={item.id} {...item } />
        ))}

        <div className={styles.cart}>
            <span>قیمت کل :</span><span className="margin-x">  {totalPrice.toLocaleString("fa-IR")}</span><span>تومان</span>
        </div>
    </div>
  )
}

export default Cart
