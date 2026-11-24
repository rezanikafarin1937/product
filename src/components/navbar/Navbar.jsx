import { Link, useLocation } from "react-router-dom";
import { routes } from "../../routes/RouteManager";
import styles from "./Navbar.module.scss";

function Navbar() {
  const location = useLocation();

  return (
    <div className={styles.parent}>
      <nav
        className={styles.parent__nav}
        aria-label="منوی اصلی سایت"
      >
        {routes.map((route) => (
          <div key={route.path}>
            <Link
              to={route.path}
              className={
                location.pathname === route.path
                  ? styles.parent__navActive
                  : ""
              }
              aria-current={
                location.pathname === route.path ? "page" : undefined
              }
            >
              {route.title}
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

