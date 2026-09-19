import LogoImage from "./logo.png"
import styles from "./Logo.module.scss"

const Logo = () => {
  return (
    <div className={styles.logo}>
      <img src={LogoImage} alt="logo" />
    </div>
  )
}

export default Logo
