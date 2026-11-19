
import { createContext } from "react";
import { CartProvider } from "./CartContext";

const AppContext = createContext({});

export function AppProvider({ children }) {
  const value = {};

  return (
    <AppContext.Provider value={value}>
      <CartProvider>
        {children}
      </CartProvider>
    </AppContext.Provider>
  );
}
