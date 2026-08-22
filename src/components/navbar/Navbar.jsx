import { Link } from "react-router-dom";
import { routes } from "../../routes/RouteManager";
import styles from "./Navbar.module.scss";

function Navbar() {
  return (
    <nav className={styles.nav}>
        {routes.map((route,index) => (
            <div>
                <Link to={route.path} key={index}>{route.title}</Link>
                <span style={{margin : "0 1rem"}}></span>
            </div>
        ))}
    </nav>
  );
}

export default Navbar;