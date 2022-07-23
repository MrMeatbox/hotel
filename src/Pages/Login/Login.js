import React from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import project_logo from "../../components/travel.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faLock } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { auth } from "../../Config/firebaseConfig";
import { Link, useHistory, useLocation } from "react-router-dom";

const Login = () => {
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const history = useHistory();

  const login = async () => {
    try {
      const user = await signInWithEmailAndPassword(
        auth,
        loginEmail,
        loginPassword
      );
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
              <h2>Continue your journey here!</h2>
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
                    onChange={(event) => {
                      setLoginEmail(event.target.value);
                    }}
                  />
                </div>
                <div className="eInput">
                  <FontAwesomeIcon className="icon" icon={faLock} />
                  <input
                    type="password"
                    id="input2"
                    placeholder="Enter password"
                    onChange={(event) => {
                      setLoginPassword(event.target.value);
                    }}
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
                      marginTop: "20px",
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
                  Already have an account?
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
                        marginTop: "20px",
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
