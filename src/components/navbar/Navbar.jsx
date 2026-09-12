import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { routes } from "../../routes/RouteManager";
import { useCartContext } from "../../context/CartContext";
import { useUserContext } from "../../context/UserContext";
import SearchHeader from "../searchHeader/SearchHeader";
import styles from "./Navbar.module.scss";

function Navbar() {
  const location = useLocation();
  const { cartQty } = useCartContext();
  const { isUserLogin, handleLogout } = useUserContext();
  return (
    <div className={styles.parent}>
      <nav className={styles.parent__nav}>
        {routes.map((route, index) => (
          <div key={index}>
            <Link
              to={route?.path}
              className={
                location.pathname === route.path ? styles.nav__active : ""
              }
            >
              {route?.title}
            </Link>
            <span className="margin-x"></span>
          </div>
        ))}
      <SearchHeader/>
      </nav>
      <div  style={{color : "#999"}}>
        {isUserLogin ? <span onClick={handleLogout}>Logout</span> : <span  style={{color : "#ddd"}}>Logout</span>}
        <span className="margin-x"></span>
        <Link to="/login"> login </Link>
        <span className="margin-x"></span>
        <Link to="/cart"> cartQty : {cartQty}</Link>
      </div>
    </div>
  );
}

export default Navbar;
