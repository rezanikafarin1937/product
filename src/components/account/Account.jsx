import { Link } from "react-router-dom";
import { useUserContext } from "../../context/UserContext";
import { useCartContext } from "../../context/CartContext";
import styles from "./account.module.scss"
const Account = () => {
  const { isUserLogin, handleLogout } = useUserContext();
  const { cartQty } = useCartContext();

  return (
    <div className={styles.account} >
      <Link to="/cart"> cartQty : {cartQty}</Link>
      <span className="margin-x"></span>
      {isUserLogin ? (
        <span onClick={handleLogout}>Logout</span>
      ) : (
        <span style={{ color: "#ddd" }}>Logout</span>
      )}
      <span className="margin-x"></span>
      <Link to="/login"> login </Link>
    </div>
  );
};

export default Account;
