import { createContext, useContext, useState } from "react";

const CartContext = createContext({
  cartItems: [],
  handleIncreaseProductQty: () => {},
});

export const useCartContext = () => {
  return useContext(CartContext);
};

export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);
  const handleIncreaseProductQty = (id) => {
    setCartItems((currentItems) => {
      let selectedItem = currentItems.find((item) => item.id === id);
      if (selectedItem == null) {
        return [...currentItems, { id, qty: 1 }];
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

  return (
    <CartContext.Provider
      value={{
        cartItems,
        handleIncreaseProductQty,
        handleDecreaseProductQty,
        getProductQty,
        handleRemoveProduct,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
