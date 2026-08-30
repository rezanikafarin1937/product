import React, { useState } from "react";
import Cookie from "js-cookie";
import { useNavigate } from "react-router-dom";
import Button from "../../components/button/Button";
import styles from "./style.module.scss";

const Login = () => {
  const navigate = useNavigate();

  // login یا register
  const [mode, setMode] = useState("login");

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [mobile, setMobile] = useState("");

  const handleClick = async (e) => {
    e.preventDefault();

    const data =
      mode === "login"
        ? {
            mobile,
            password,
          }
        : {
            name: username,
            mobile,
            password,
          };

    const url =
      mode === "login"
        ? `${process.env.REACT_APP_API_URL}/api/users/login`
        : `${process.env.REACT_APP_API_URL}/api/users`;

    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          // "Authorization": `${Cookie.get("token")}`
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (!response.ok) {
        return;
      }

      // set in cookie
      Cookie.set("token", result.token);

      // setUser(result.user);

      // redirect to dashboard page
      navigate("/about");
    } catch (error) {
      console.log("خطا در ارتباط با سرور:", error);
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

            <Button title={isLogin ? "ورود" : "ثبت نام"} />

            {/* <button className="btn" type="submit">
              {isLogin ? "ورود" : "ثبت نام"}
            </button> */}
          </form>

          <br />
          <br />

          <div>
            {isLogin ? (
              <>

                <Button title="ثبت نام" onClick={() => setMode("register")}/>

                {/* <button
                  className="btn"
                  type="button"
                  onClick={() => setMode("register")}
                >
                  ثبت نام 
                </button> */}
              </>
            ) : (
              <>

                <Button title="وارد شوید"/>

                {/* <button
                  className="btn"
                  type="button"
                  onClick={() => setMode("login")}
                >
                  وارد شوید
                </button> */}
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
