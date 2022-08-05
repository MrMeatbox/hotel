import React from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import project_logo from "../../components/travel.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faLock } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { auth } from "../../Config/firebaseConfig";
import { Link, useHistory, useLocation } from "react-router-dom";
import { Password } from "@mui/icons-material";
import { createContext } from "react";
const emailContext = createContext();
const Login = () => {
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const history = useHistory();

  const emailChange = (e) => {
    setLoginEmail(e.target.value);
  };
  const passwordChange = (e) => {
    setLoginPassword(e.target.value);
  };

  console.log(loginEmail);
  const login = () => {
    try {
      signInWithEmailAndPassword(auth, loginEmail, loginPassword);
      console.log("logged in");
      history.push("/home");
    } catch (error) {
      console.log(error.message);
    }
  };
  const logout = async () => {};

  return (
    <div className="App">
      <div></div>
      <div className="wrapper">
        <div className="content">
          <div className="logo">
            <img src={project_logo} alt="" />
          </div>
          <div className="form">
            <div className="c1">
              <h2 style={{ fontfamily: "vlogger" }}>Welcome back!</h2>
            </div>
            <div className="form">
              <div className="status"></div>
              <form action="#">
                <div className="eInput">
                  <FontAwesomeIcon className="icon" icon={faUser} />
                  <input
                    type="text"
                    id="input1"
                    placeholder="Enter email address"
                    onChange={emailChange}
                    value={loginEmail}
                  />
                </div>
                <div className="eInput">
                  <FontAwesomeIcon className="icon" icon={faLock} />
                  <input
                    type="password"
                    id="input2"
                    placeholder="Enter password"
                    onChange={passwordChange}
                    value={loginPassword}
                  />
                </div>
                <div>
                  <a href="/fogotpass">Forgot password?</a>
                </div>
                <div>
                  <button
                    onClick={login}
                    style={{
                      backgroundColor: "red",
                      width: "100%",
                      marginTop: "10px",
                    }}
                  >
                    <Link
                      to="/home"
                      type="button"
                      className="btn shadow-none"
                      style={{
                        textDecoration: "none",
                        color: "white",
                        border: "none",
                        padding: "5px 1px",
                        fontFamily: "Fira code",
                      }}
                    ></Link>
                    Login
                  </button>
                </div>
                <p
                  style={{
                    textAlign: "center",
                    marginTop: "25px",
                    fontWeight: "500",
                  }}
                >
                  Don't have any account?
                </p>
                <div>
                  <button
                    type="button"
                    style={{
                      backgroundColor: "royalBLue",
                      width: "100%",
                    }}
                  >
                    <Link
                      to="/register"
                      style={{
                        textDecoration: "none",
                        border: "none",
                        color: "white",
                      }}
                    >
                      {" "}
                      Register
                    </Link>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
