
import { createContext, useContext } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";

const CartContext = createContext({
  cartItems: [],
  cartQty: 0,
  totalPrice: 0,
  handleIncreaseProductQty: () => {},
});

export const useCartContext = () => {
  return useContext(CartContext);
};

export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useLocalStorage("cartItems", []);

  // افزودن محصول به سبد خرید
  const handleIncreaseProductQty = ({
    id,
    price,
    discount,
    title,
    description,
    images,
  }) => {
    setCartItems((currentItems) => {
      const selectedItem = currentItems.find(
        (item) => item.id === id
      );

      if (!selectedItem) {
        return [
          ...currentItems,
          { id, qty: 1, price, discount, title, description, images },
        ];
      }

      return currentItems.map((item) =>
        item.id === id
          ? { ...item, qty: item.qty + 1 }
          : item
      );
    });
  };

  // تعداد کل کالاها
  const cartQty = cartItems.reduce(
    (total, item) => total + item.qty,
    0
  );

  // کاهش تعداد محصول
  const handleDecreaseProductQty = (id) => {
    setCartItems((currentItems) => {
      const selectedItem = currentItems.find(
        (item) => item.id === id
      );

      if (!selectedItem) return currentItems;

      if (selectedItem.qty <= 1) {
        return currentItems.filter((item) => item.id !== id);
      }

      return currentItems.map((item) =>
        item.id === id
          ? { ...item, qty: item.qty - 1 }
          : item
      );
    });
  };

  // تعداد یک محصول مشخص
  const getProductQty = (id) => {
    return (
      cartItems.find((item) => item.id === id)?.qty || 0
    );
  };

  // حذف محصول
  const handleRemoveProduct = (id) => {
    setCartItems((currentItems) =>
      currentItems.filter((item) => item.id !== id)
    );
  };

  // قیمت کل با تخفیف
  const totalPrice = cartItems.reduce((total, item) => {
    const finalPrice =
      item.price - (item.price * item.discount) / 100;

    return total + finalPrice * item.qty;
  }, 0);

  // مجموع تخفیف
  const totalDiscount = (items) => {
    return items.reduce((total, item) => {
      return (
        total +
        (item.price * item.discount * item.qty) / 100
      );
    }, 0);
  };

  // قیمت کل بدون تخفیف
  const totalPriceWithoutDiscount = (items) => {
    return items.reduce((total, item) => {
      return total + item.price * item.qty;
    }, 0);
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
        totalPriceWithoutDiscount,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
