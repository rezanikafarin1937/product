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
              <SearchHeader />
            </div>

            <span className="margin-x"></span>
          </div>
          <Navbar />
          <Logo />
        </div>
      </div>
    </header>
  );
}

export default Header;
