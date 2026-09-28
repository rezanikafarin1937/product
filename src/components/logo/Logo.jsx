import LogoImage from "./logo.png";
import styles from "./Logo.module.scss";

const Logo = ({ width = "50px", height = "50px" }) => {
  return (
    <div
      className={styles.logo}
      style={{
        width: width,
        height: height,
      }}
    >
      <img src={LogoImage} alt="logo" />
    </div>
  );
};

export default Logo;
