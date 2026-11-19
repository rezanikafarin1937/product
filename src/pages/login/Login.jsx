
import { useNavigate } from "react-router-dom";

import Button from "../../components/button/Button";
import styles from "./style.module.scss";

const Login = () => {
  const navigate = useNavigate();

  return (
    <div className="wrapper">
      <div className={styles.parent}>
        <div className={styles.parent__box}>
          <h1>ورود کاربران</h1>

          <p>
            سیستم ورود و ثبت‌نام در نسخه فعلی فروشگاه
            غیرفعال است.
          </p>

          <Button
            width="100%"
            onClick={() => navigate("/store")}
          >
            مشاهده محصولات
          </Button>

          <br />
          <br />

          <Button
            width="100%"
            onClick={() => navigate("/cart")}
          >
            مشاهده سبد خرید
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Login;
