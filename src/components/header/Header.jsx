import Logo from "../logo/Logo";
import Navbar from "../navbar/Navbar";
import styles from "./Header.module.scss";
function Header() {
  return (
    <header className={styles.header}>
      <div className="wrapper">
        <div className={styles.header__flex}>
          <Logo />
          <span className="margin-x"></span>
          <Navbar />
          <span className="margin-x"></span>
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
