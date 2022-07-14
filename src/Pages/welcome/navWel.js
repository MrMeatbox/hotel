import React from "react";
import "./welcome.css";

const welcNav = () => {
  return (
    <nav
      class="navbar navbar-expand-lg navbar-light bg-dark"
      style={{ backgroundImage: "linear-gradient(to right, #1034A6, #F62D2D)" }}
    >
      <a
        class="navbar-brand"
        href="#"
        style={{
          color: "white",
          fontWeight: "bold",
          marginLeft: "10px",
          fontSize: "30px",
        }}
      >
        Navbar
      </a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavAltMarkup ">
        <div class="navbar-nav ms-auto">
          <div class="btn-group" role="group" aria-label="Basic example">
            <button
              type="button"
              class="btn btn-secondary"
              style={{ fontWeight: "700" }}
            >
              <a class="nav-item nav-link active" href="/home">
                Hotels
              </a>
            </button>
            <button
              type="button"
              class="btn btn-secondary"
              style={{ fontWeight: "700" }}
            >
              <a class="nav-item nav-link" href="#">
                Travel spots
              </a>
            </button>
            <button
              type="button"
              class="btn btn-secondary"
              style={{ fontWeight: "700" }}
            >
              <a class="nav-item nav-link" href="#">
                Resorts
              </a>
            </button>
            <button
              type="button"
              class="btn btn-secondary"
              style={{ fontWeight: "700" }}
            >
              <a class="nav-item nav-link" href="register">
                Register
              </a>
            </button>
            <button
              type="button"
              class="btn btn-secondary"
              style={{ fontWeight: "700" }}
            >
              <a class="nav-item nav-link" href="login">
                Login
              </a>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default welcNav;
