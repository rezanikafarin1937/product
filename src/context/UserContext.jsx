import { createContext, useContext,useState } from "react";
import Cookie from "js-cookie";

const UserContext = createContext({});

export const useUserContext = () => {
  return useContext(UserContext);
};

export function UserProvider({ children }){
    const [isUserLogin,setIsUserLogin] = useState(()=>{
        const token = Cookie.get("token");
        if(token){
            return true;
        }
        else{
           return false;
        }
    })
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
