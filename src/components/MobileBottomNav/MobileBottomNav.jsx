
import {
  HomeIcon,
  ProductsIcon,
  CategoriesIcon,
  AboutIcon,
  ContactIcon,
} from "../../icons";

import { Link, useLocation } from "react-router-dom";
import { routesMobile } from "../../routes/RouteManager";
import styles from "./MobileBottomNav.module.scss";

const mobileIcons = {
  home: HomeIcon,
  products: ProductsIcon,
  categories: CategoriesIcon,
  about: AboutIcon,
  contact: ContactIcon,
};

const MobileBottomNav = () => {
  const location = useLocation();

  return (
    <div className={styles.mobile}>
      {routesMobile.map((item, index) => {
        const Icon = mobileIcons[item.key];
        const isActive = location.pathname === item.path;

        return (
          <div key={item.key || index}>
            <Link
              to={item.path}
              className={`${styles.mobile__item} ${isActive ? styles.mobile__active : ""}`}
              aria-current={isActive ? "page" : undefined}
            >
              <span aria-hidden="true">
                {Icon && <Icon />}
              </span>

              <span>{item.title}</span>
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default MobileBottomNav;
