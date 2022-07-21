import React from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import project_logo from "../components/cable-car-cabin.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faLock } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import "./register.css";
import "../App.css";
import { auth } from "../Config/firebaseConfig";
import { Link, useHistory, useLocation } from "react-router-dom";

const Register = () => {
  const getData = (val) => {
    console.log(val.target.value);
  };

  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");

  const register = async () => {
    try {
      const user = await createUserWithEmailAndPassword(
        auth,
        registerEmail,
        registerPassword
      );
      console.log(user);
    } catch (error) {
      console.log(error.message);
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
              <h2>Start your journey here!</h2>
            </div>
            <form className="form">
              <div className="eInput">
                <FontAwesomeIcon className="icon" icon={faUser} />
                <input
                  className="inputinfo"
                  type="text"
                  id="input1"
                  placeholder="Enter email address"
                  onChange={(event) => {
                    setRegisterEmail(event.target.value);
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
                  onChange={(event) => {
                    setRegisterPassword(event.target.value);
                  }}
                />
              </div>
              <div>
                <button onClick={register}>Register</button>
              </div>
              <div>
                <button type="button" className="homebtn">
                  <Link
                    to="/login"
                    style={{
                      textDecoration: "none",
                      border: "none",
                      color: "white",
                    }}
                  >
                    {" "}
                    Login
                  </Link>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
