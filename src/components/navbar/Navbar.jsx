import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { routes } from "../../routes/RouteManager";
import styles from "./Navbar.module.scss";

function Navbar() {
  const location = useLocation();
  const path = location.pathname;
  console.log("path = ",path)
  return (
    <nav className={styles.nav}>
      {routes.map((route, index) => (
        <div  key={index}>
            {console.log(" === ",route.path === path)}
          <Link to={route.path} className={path  === route.path ? styles.nav__active : ""}>
            {route.title}
          </Link>
          <span style={{ margin: "0 1rem" }}></span>
        </div>
      ))}
    </nav>
  );
}

export default Navbar;
