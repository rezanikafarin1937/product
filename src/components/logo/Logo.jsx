import LogoImage from "./my-logo.png";
import styles from "./Logo.module.scss";

const Logo = ({ width = "50px", height = "50px" }) => {
  return (
    <div className={styles.logo}>
      <img
        src={LogoImage}
        alt="فروشگاه عینک تیزبین"
        width={width}
        height={height}
        loading="eager"
        decoding="async"
      />
    </div>
  );
};

export default Logo;
