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
            <div className={styles.header__right}>
              <Account />
              <span className="margin-x"></span>
              <SearchHeader />
            </div>

            <span className="margin-x"></span>
          </div>
          <Navbar />
          <div className={styles.header__logo}>
             <h1 style={{color : "var(--color-primary-dark)"}} className="primary-title"><i>Tizbin</i></h1>
             <Logo />
          </div>
         
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
