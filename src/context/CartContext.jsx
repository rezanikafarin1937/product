import { createContext, useContext } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";

const CartContext = createContext({
  cartItems: [],
  cartQty: null,
  handleIncreaseProductQty: () => {},
});

export const useCartContext = () => {
  return useContext(CartContext);
};

export function CartProvider({ children }) {
  // const [cartItems, setCartItems] = useState([]);
  const [cartItems, setCartItems] = useLocalStorage("cartItems", []);
  const handleIncreaseProductQty = ({
    id,
    price,
    discount,
    title,
    description,
    images,
  }) => {
    setCartItems((currentItems) => {
      let selectedItem = currentItems.find((item) => item.id === id);
      if (selectedItem == null) {
        return [
          ...currentItems,
          { id, qty: 1, price, discount, title, description, images },
        ];
      } else {
        return currentItems.map((item) => {
          if (item.id === id) {
            return { ...item, qty: item.qty + 1 };
          } else {
            return item;
          }
        });
      }
    });
  };

  const cartQty = cartItems.reduce((total, item) => {
    return total + item.qty;
  }, 0);

  const handleDecreaseProductQty = (id) => {
    setCartItems((currentItems) => {
      let selectedItem = currentItems.find((item) => item.id === id);
      if (selectedItem?.qty === 1) {
        return currentItems.filter((item) => item.id !== id);
      } else {
        return currentItems.map((item) => {
          if (item.id === id) return { ...item, qty: item.qty - 1 };
          else {
            return item;
          }
        });
      }
    });
  };

  const getProductQty = (id) => {
    return cartItems.find((item) => id === item.id)?.qty || 0;
  };

  const handleRemoveProduct = (id) => {
    setCartItems((currentItems) => {
      return currentItems.filter((item) => id !== item.id);
    });
  };

  const totalPrice = cartItems.reduce((total, item) => {
    return total + (item.price - (item.price * item.discount) / 100) * item.qty;
  }, 0);


  const totalDiscount = (items) => {
    let d = 0;
    items.map((item) => {
      d += (item.discount / 100) * item.price;
    });
    return d;
  };

  const totalPriceWithoutDiscount = (items) => {
    let allPrice = 0;
    items.map((item) => {
      allPrice += item.price;
    });
    return allPrice;
  };


  
  return (
    <CartContext.Provider
      value={{
        cartItems,
        cartQty,
        totalPrice,
        handleIncreaseProductQty,
        handleDecreaseProductQty,
        getProductQty,
        handleRemoveProduct,
        totalDiscount,
        totalPriceWithoutDiscount
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
