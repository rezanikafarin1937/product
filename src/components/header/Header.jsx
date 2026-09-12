import Account from "../account/Account";
import Logo from "../logo/Logo";
import Navbar from "../navbar/Navbar";
import SearchHeader from "../searchHeader/SearchHeader";
import styles from "./Header.module.scss";
function Header() {
  return (
    <header className={styles.header}>
      <div className="wrapper">
        <div className={styles.header__flex}>
          <div className={styles.header__items}>
            <Logo />
            <span className="margin-x"></span>
            <Navbar />
            <span className="margin-x"></span>
            <SearchHeader />
          </div>
          <Account />
          <div className={styles.header__mobileItem}>
            <div className={styles.header__icon}>H</div>
            <span className="margin-x"></span>
            <div className={styles.header__icon}>S</div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
