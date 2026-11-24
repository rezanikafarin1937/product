
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import Button from "../../components/button/Button";
import styles from "./style.module.scss";

const Login = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const previousTitle = document.title;

    document.title = "ورود کاربران | فروشگاه عینک تیزبین";

    let robots = document.querySelector('meta[name="robots"]');
    const isNewRobots = !robots;
    const previousContent = robots?.content;

    if (!robots) {
      robots = document.createElement("meta");
      robots.name = "robots";
      document.head.appendChild(robots);
    }

    robots.content = "noindex, follow";

    return () => {
      document.title = previousTitle;

      if (isNewRobots) {
        robots.remove();
      } else {
        robots.content = previousContent;
      }
    };
  }, []);

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
