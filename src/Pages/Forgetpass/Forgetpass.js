import React from "react";
import "./Forgetpass.css";
import { Link } from "react-router-dom";
const Forgetpass = () => {
  return (
    <>
      <h1>You'll reset your pass here!</h1>
      <button className="resetPass">
        <Link
          to="/login"
          type="button"
          className="btn shadow-none"
          style={{
            textDecoration: "none",
            color: "white",
            border: "none",
            fontFamily: "Fira code",
            fontWeight: "bold",
          }}
        >
          Reset Password
        </Link>
      </button>
    </>
  );
};

export default Forgetpass;
