import React from "react";
import "./adminPanel.css";
import { signInWithEmailAndPassword } from "firebase/auth";
import project_logo from "../../components/admin.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faLock } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { auth } from "../../Config/firebaseConfig";
import { Link, useHistory, useLocation } from "react-router-dom";
import { height } from "@mui/system";

const AdminLogin = () => {
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
      history.push("/test");
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <div className="image">
      <center>
        <br />
        <br />
        <br />
        <br />
        <br />

        <h1
          className="admin_head"
          style={{
            fontFamily: "Fira code",
            color: "white",
            fontWeight: "bold",
          }}
        >
          Welcome admin!
        </h1>
        <br />
        <h4 style={{ fontFamily: "Fira code" }}>Please enter credentialss:</h4>
        <br />
        <br />
        <input
          placeholder="Enter admin email..."
          type="text"
          style={{
            width: "500px",
            height: "50px",
            textAlign: "center",
            borderRadius: "5px",
          }}
          onChange={(event) => {
            setLoginEmail(event.target.value);
          }}
        ></input>
        <br />
        <br />
        <input
          placeholder="Enter admin password..."
          type="PASSWORD"
          style={{
            width: "500px",
            height: "50px",
            textAlign: "center",
            borderRadius: "5px",
          }}
          onChange={(event) => {
            setLoginPassword(event.target.value);
          }}
        ></input>
        <br />
        <br />
        <button
          onClick={login}
          style={{
            width: "500px",
            height: "40px",
            textAlign: "center",
            borderRadius: "5px",
            border: "none",
            backgroundColor: "skyblue",
            fontFamily: "Fira code",
            fontWeight: "bold",
            color: "white",
          }}
        >
          Login
        </button>
      </center>
    </div>
  );
};
export default AdminLogin;
