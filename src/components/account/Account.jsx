
import { Link } from "react-router-dom";
import UserIcon from "../../icons/user-icon/UserIcon";
import ButtonCart from "../button-cart/ButtonCart";
import styles from "./account.module.scss";

const Account = () => {
  return (
    <div className={styles.account}>
      <ButtonCart />

      <span className={styles.account__mx}></span>

      <Link to="/login">
        <div
          title="ورود"
          className={styles.accountUserIcon}
        >
          <UserIcon
            width={20}
            height={20}
            color="var(--color-text)"
          />
        </div>
      </Link>
    </div>
  );
};

export default Account;
