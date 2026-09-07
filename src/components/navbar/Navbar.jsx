import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { routes } from "../../routes/RouteManager";
import { useCartContext } from "../../context/CartContext";
import { useUserContext } from "../../context/UserContext";
import styles from "./Navbar.module.scss";

function Navbar() {
  const location = useLocation();
  const { cartQty } = useCartContext();
  const {isUserLogin,handleLogout} = useUserContext()
  return (
    <>
      <nav className={styles.nav}>
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
            <span className="space-item"></span>
          </div>
        ))}
      </nav>
      <Link to="/cart"> cartQty : {cartQty}</Link>
      <span className="margin-x"></span>
      {isUserLogin ? <div onClick={handleLogout}>Logout</div>  : ""}
    </>
  );
}

export default Navbar;
