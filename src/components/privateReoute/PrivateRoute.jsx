import { Navigate, Outlet } from "react-router-dom";
import { useUserContext } from "../../context/UserContext"

const PrivateRoute = () => {
    const {isUserLogin} = useUserContext();
    console.log("isUserLogin = ",isUserLogin)
    return (
    <>
      {isUserLogin ? <Outlet/> : <Navigate to="/login" />}
    </>
  )
}

export default PrivateRoute
