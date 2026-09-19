import { Link } from "react-router-dom";
import { useUserContext } from "../../context/UserContext";
import LogoutIcon from "../../icons/logoutIcon/LogoutIcon";
import UserIcon from "../../icons/user-icon/UserIcon";
import ButtonCart from "../button-cart/ButtonCart";
import styles from "./account.module.scss";
const Account = () => {
  const { isUserLogin, handleLogout } = useUserContext();

  return (
    <div className={styles.account}>

      <ButtonCart/>
      <span className="margin-x"></span>
      <Link to="/login">
        <div title="لاگین" className={styles.accountUserIcon}>
          <UserIcon width={20} height={20} color="var(--color-text)"/>
        </div>
      </Link>

      <span className="margin-x"></span>

      {isUserLogin ? <div className={styles.accountUserIcon} title="خروج" onClick={handleLogout}><LogoutIcon  width={20} height={20} color="var(--color-text)"/></div> : <div><LogoutIcon color="#ddd"/></div>}


    </div>
  );
};

export default Account;
