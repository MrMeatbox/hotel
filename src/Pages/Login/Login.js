import React from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import project_logo from "../../components/cable-car-cabin.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faLock } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import "./Login.css";
import "../../App.css";
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

  const [hide, sethide] = useState(true);
  const [show, setshow] = useState(true);
  const validateForm = (event) => {
    event.preventDefault();
    const input1 = document.querySelector("#input1");
    const input2 = document.querySelector("#input2");
    const status = document.querySelector(".status");

    let validation = "Please fill-in the above fields";
    let emailVal = "Email validation error must inclued @ .com TryAgain!";
    let passVal = "Passowrd char must not be less than 8";
    if (!input1.value) {
      console.warn("validation error");
      //status.classList.add("active");
      status.innerHTML = `${validation}`;
    } else {
      emailValidate();
    }
    function emailValidate() {
      let pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
      if (!input1.value.match(pattern)) {
        console.warn("pattern failed");
        status.classList.add("active");
        status.innerHTML = `${emailVal}`;
      } else {
        console.log("input1 validated");
        status.classList.remove("active");
        input1.classList.add("valid");
      }
    }
    if (!input2.value) {
      console.warn("validation error");
      //status.classList.add("active");
      status.innerHTML = `${validation}`;
    } else {
      passwordValidate();
    }
    function passwordValidate() {
      if (input2.value.length < 8) {
        console.warn("Passowrd char must not be less than 8");
        status.classList.add("active");
        status.innerHTML = `${passVal}`;
      } else {
        console.log("input2 validated");
        status.classList.remove("active");
        input2.classList.add("valid");
      }
    }
    if (
      input1.classList.contains("valid") &&
      input2.classList.contains("valid")
    ) {
      console.log("submitted");
      setTimeout(() => {
        //  window.location.href = 'AirbnbHome';
        let container = document.querySelector(".container");
        let wrapper = document.querySelector(".wrapper");
        sethide(!hide + wrapper.classList.add("hide"));
        setshow(!show + container.classList.add("show"));
      }, 1000);
    }
  };
  const handleMail = () => {
    const input1 = document.querySelector("#input1");
    const status = document.querySelector(".status");
    let validation = "Please fill-in the fields";
    let emailVal = "Email validation error must inclued @ .com TryAgain!";
    let passVal = "Passowrd char must not be less than 8";
    if (!input1.value) {
      alert("Must insert an email");
      status.classList.add("active");
      status.innerHTML = `${validation}`;
    } else {
      emailValidate();
    }
    function emailValidate() {
      let pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
      if (!input1.value.match(pattern)) {
        console.warn("pattern failed");
        status.classList.add("active");
        status.innerHTML = `${emailVal}`;
      } else {
        console.log("input1 validated");
        status.classList.remove("active");
      }
    }
  };
  const handlePassword = () => {
    const input2 = document.querySelector("#input2");
    const status = document.querySelector(".status");

    let validation = "Please fill-in the fields";
    let passVal = "Passowrd char must not be less than 8";
    if (!input2.value) {
      alert("Must insert a password");
      status.classList.add("active");
      status.innerHTML = `${validation}`;
    } else {
      passwordValidate();
    }
    function passwordValidate() {
      if (input2.value.length < 8) {
        console.warn("Passowrd char must not be less than 8");
        status.classList.add("active");
        status.innerHTML = `${passVal}`;
      } else {
        console.log("input2 validated");
        status.classList.remove("active");
      }
    }
  };

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
              <form action="#" onSubmit={validateForm}>
                <div className="eInput">
                  <FontAwesomeIcon className="icon" icon={faUser} />
                  <input
                    className="inputinfo"
                    type="text"
                    id="input1"
                    placeholder="Enter email address"
                    onKeyUp={handleMail}
                    onChange={(event) => {
                      setLoginEmail(event.target.value);
                    }}
                  />
                </div>
                <div className="eInput">
                  <FontAwesomeIcon className="icon" icon={faLock} />
                  <input
                    className="inputinfo"
                    type="password"
                    id="input2"
                    placeholder="Enter password"
                    onKeyUp={handlePassword}
                    onChange={(event) => {
                      setLoginPassword(event.target.value);
                    }}
                  />
                </div>
                <div className="forgotpass">
                  <a href="/fogotpass">Forgot password?</a>
                </div>
                <div>
                  <button type="button" className="submit" onClick={login}>
                    {
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
                    }
                    Login
                  </button>
                </div>
                <div>
                  <button type="button" className="homebtn">
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
