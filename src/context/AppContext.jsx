import { createContext } from "react";
import { UserProvider } from "./UserContext";
import { CartProvider } from "./CartContext";

const AppContext = createContext({});

export function AppProvider({ children }){
     const value = {};
    return(
        <AppContext.Provider value={value}>
            <UserProvider>
                <CartProvider>
                    { children }
                </CartProvider>
            </UserProvider>
        </AppContext.Provider>
    )
}
