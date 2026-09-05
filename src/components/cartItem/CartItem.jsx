import { useEffect, useState } from "react";
import { getProduct } from "../../services/api";
import { useCartContext } from "../../context/CartContext";
import Button from "../button/Button";
import styles from "./cartItem.module.scss";

const CartItem = ({ id, qty }) => {
  const [product, setProduct] = useState(null);
  const {
    handleIncreaseProductQty,
    handleDecreaseProductQty,
    getProductQty,
    handleRemoveProduct,
  } = useCartContext();
  useEffect(() => {
    getProduct(id)
      .then((res) => {
        setProduct(res.data);
        console.log("Product in CartItem = ", res.data);
      })
      .catch((err) => console.log(err));
  }, [id]);
  return (
    <div className={styles.cart}>
      <div className={styles.cart__image}>
        <img
          src={`${process.env.REACT_APP_API_URL}${product?.images[0]}`}
          alt={product?.title}
        />
      </div>
      <div>
        <h3>{product?.title}</h3>
        <div>
          <span>قیمت : </span> {product?.price} <span>تومان</span>
        </div>
        <div>
          <span>تخفیف : </span> {product?.discount} <span>درصد </span>
        </div>
        <div>
          <span>توضیحات : </span> {product?.description}
        </div>
        <br />
        <div>
          <Button onClick={() => handleRemoveProduct(id)}>حذف</Button>
          <span className="margin-x"></span>
          <Button onClick={() => handleIncreaseProductQty(id)}>+</Button>
          <span className="margin-x">{getProductQty(id)}</span>
          <Button onClick={() => handleDecreaseProductQty(id)}>-</Button>
        </div>
      </div>

      {/* <div>{}</div> */}
    </div>
  );
};

export default CartItem;
