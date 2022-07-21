import React, { useState } from "react";
import "./welcome.css";
import ListIcon from "@mui/icons-material/List";
import LoginIcon from "@mui/icons-material/Login";
import Button from "@mui/material/Button";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import Navwel from "./navWel";
import { Link } from "react-router-dom";
import { AppBar, IconButton, Toolbar } from "@mui/material";

const Welcome = () => {
  return (
    <div className="main">
      <div className="root">
        <Toolbar className="appbarWrapper">
          <h2 className="title">TRAVELLA</h2>
          {/* <IconButton>
            <Link
              to="/register"
              style={{
                textDecoration: "none",
                border: "none",
                color: "black",
              }}
            >
              <LoginIcon classname="icon" fontSize="large" />
            </Link>
          </IconButton> */}
        </Toolbar>

        <button className="submit">
          <Link
            to="/register"
            style={{
              textDecoration: "none",
              border: "none",
              color: "black",
            }}
          >
            GET STARTED
            <KeyboardArrowRightIcon classname="icon" fontSize="large" />
          </Link>
        </button>
        <h1>
          BOOK<span></span>
        </h1>
      </div>
    </div>
  );
};
export default Welcome;
