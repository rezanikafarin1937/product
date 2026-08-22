import Logo from "../logo/Logo";
import Navbar from "../navbar/Navbar";
import styles from "./Header.module.scss";
function Header() {
  return (
    <header className={styles.header}>
      <div className="wrapper">
        <div className={styles.header__flex}>
          {/* <Logo /> */}
          <Navbar />
        </div>
      </div>
    </header>
  );
}

export default Header;
