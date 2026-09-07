import { createContext } from "react";
import { UserProvider } from "./UserContext";
import { CartProvider } from "./CartContext";

const AppContext = createContext({});

export function AppProvider({ children }){
    return(
        <AppContext.Provider>
            <UserProvider>
                <CartProvider>
                    { children }
                </CartProvider>
            </UserProvider>
        </AppContext.Provider>
    )
}
