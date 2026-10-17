import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { routes } from "../../routes/RouteManager";
import styles from "./Navbar.module.scss";

function Navbar() {
  const location = useLocation();
  return (
    <div className={styles.parent}>
      <nav className={styles.parent__nav}>
        {routes.map((route, index) => (
          <div key={index}>
            <Link
              to={route?.path}
              className={
                location.pathname === route.path ? styles.parent__navActive : ""
              }
            >
              {route?.title}
            </Link>
            <span className="margin-x"></span>
            <span className="margin-x"></span>
          </div>
        ))}
      </nav>
    </div>
  );
}

export default Navbar;
