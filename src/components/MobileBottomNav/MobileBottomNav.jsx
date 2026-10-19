import {
  HomeIcon,
  ProductsIcon,
  CategoriesIcon,
  AboutIcon,
  ContactIcon,
} from "../../icons";

import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
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
        return (
          <div key={index}>
            <Link
              to={item?.path}
              className={`${styles.mobile__item} ${location.pathname === item.path ? styles.mobile__active : ""}`}
            >
              <span>
                <Icon />
              </span>
              <span>{item?.title}</span>
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default MobileBottomNav;
