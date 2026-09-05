import { useCartContext } from "../../context/CartContext"
import CartItem from "../../components/cartItem/CartItem";
import styles from "./Cart.module.scss"

const Cart = () => {
    const {cartItems} = useCartContext();
    console.log("Cart Items in CartPage = ",cartItems)
    return (
    <div>
        <h1>Cart Page</h1>
        {cartItems.map((item,index) => (
            <CartItem key={item.id} {...item}/>
        ))}
    </div>
  )
}

export default Cart
