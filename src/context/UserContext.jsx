import { createContext, useContext,useState } from "react";

const UserContext = createContext({});

export const useUserContext = () => {
  return useContext(UserContext);
};

export function UserProvider({ children }){
    const [isUserLogin,setIsUserLogin] = useState(false)
    const handleLogin = () =>{
        setIsUserLogin(true)
    }
    const handleLogout = () =>{
        setIsUserLogin(false)
    }
    return(
        <UserContext.Provider value={{isUserLogin,handleLogin,handleLogout}}>
            { children }
        </UserContext.Provider>
    )
}
