import React, { useState } from "react";
import Cookie from "js-cookie";
import { useNavigate } from "react-router-dom";
import Button from "../../components/button/Button";
import { useUserContext } from "../../context/UserContext";
import { auth } from "../../services/api";
import styles from "./style.module.scss";

const Login = () => {
  const navigate = useNavigate();

  // login Or register
  const [mode, setMode] = useState("login");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [mobile, setMobile] = useState("");
  const { handleLogin } = useUserContext();

  const handleClick = async (e) => {
    e.preventDefault();

    const userData = await auth(username, password, mobile, mode);

    console.log("user Data = ",userData)

    if (userData) {
      Cookie.set("token", userData.token);
      handleLogin();
      navigate("/cart");
    }
  };

  const isLogin = mode === "login";

  return (
    <div className="wrapper">
      <div className={styles.parent}>
        <div className={styles.parent__box}>
          <h1>{isLogin ? "ورود" : "ثبت نام"}</h1>

          <form onSubmit={handleClick}>
            {!isLogin && (
              <input
                type="text"
                placeholder="نام"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            )}
            <br />
            <br />
            <input
              type="text"
              placeholder="شماره موبایل"
              value={mobile}
              onChange={(e) => setMobile(e.target.value)}
            />
            <br />
            <br />

            <input
              type="password"
              placeholder="رمز عبور"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <br />
            <br />

            <Button>{isLogin ? "ورود" : "ثبت نام"} </Button>
          </form>

          <br />
          <br />

          <div>
            {isLogin ? (
              <>
                <Button onClick={() => setMode("register")}>ثبت نام</Button>
              </>
            ) : (
              <>
                <Button> وارد شوید </Button>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
