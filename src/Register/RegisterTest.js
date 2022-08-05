import React from "react";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../Config/firebaseConfig";
import background from "../components/travel.png";
import "./RegisterTest.css";
import { TravelExplore } from "@mui/icons-material";

const RegisterUser = () => {
  const history = useHistory();

  const backHome = () => {
    history.push("/");
  };
  const [registerInformation, setRegisterInformation] = useState({
    email: "",
    password: "",
    confirmPAssword: "",
  });
  const handleRegister = () => {
    if (registerInformation.password !== registerInformation.confirmPAssword) {
      alert("Make sure to match password!");
      return;
    }
    createUserWithEmailAndPassword(
      auth,
      registerInformation.email,
      registerInformation.password
    )
      .then(() => {
        alert("Registered");
        history.push("/home");
      })
      .catch((err) => alert(err.message));
  };

  return (
    <div className="reg-img">
      <br />
      <br />
      <br />
      <br />
      <br />
      <center>
        <h1 className="reg-title">PLEASE ENTER INFORMATION</h1>
      </center>
      <br />
      <br />
      <center>
        <input
          name="email"
          placeholder="Enter email address"
          value={registerInformation.email}
          type="email"
          onChange={(e) =>
            setRegisterInformation({
              ...registerInformation,
              email: e.target.value,
            })
          }
          style={{
            borderRadius: "3px",
            width: "450px",
            height: "50px",
            textAlign: "center",
          }}
        />
        <br />
        <br />
        <input
          type="password"
          placeholder="Enter password"
          value={registerInformation.password}
          onChange={(e) =>
            setRegisterInformation({
              ...registerInformation,
              password: e.target.value,
            })
          }
          style={{
            borderRadius: "3px",
            width: "450px",
            height: "50px",
            textAlign: "center",
          }}
        />
        <br />
        <br />
        <input
          type="password"
          style={{
            borderRadius: "3px",
            textAlign: "center",
            width: "450px",
            height: "50px",
          }}
          placeholder="Confirm Password password"
          value={registerInformation.confirmPAssword}
          onChange={(e) =>
            setRegisterInformation({
              ...registerInformation,
              confirmPAssword: e.target.value,
            })
          }
        />
        <br />
        <br />
        <button
          className="btn-submit"
          style={{
            borderRadius: "3px",
            textAlign: "center",
            width: "450px",
            height: "50px",
            border: "none",
            color: "white",
          }}
          onClick={handleRegister}
        >
          Register
        </button>
        <br />
        <br />
        <button
          className="btn-back"
          onClick={backHome}
          style={{
            borderRadius: "3px",
            textAlign: "center",
            width: "450px",
            height: "50px",
            border: "none",
            color: "white",
          }}
        >
          Back
        </button>
      </center>
    </div>
  );
};

export default RegisterUser;
