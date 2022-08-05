import React from "react";
import { useEffect } from "react";
import { signOut, onAuthStateChanged } from "firebase/auth";
import { auth } from "../../Config/firebaseConfig";
import { useHistory } from "react-router-dom";
const Navbar = () => {
  const history = useHistory();

  const handleSignOut = () => {
    signOut(auth).then(() => {
      history.push("/login");
    });
  };
  return (
    <>
      <nav
        class="navbar navbar-expand-lg navbar-dark bg-primary"
        style={{
          backgroundImage: "linear-gradient(to right, #1034A6, #F62D2D)",
        }}
      >
        <div class="container-fluid">
          <a class="navbar-brand" href="#">
            TRAVELLA
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNavDropdown">
            <ul class="navbar-nav ms-auto">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="/home">
                  Home
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/bookResort">
                  Resorts
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/bookHotel">
                  Hotels
                </a>
              </li>
              <li class="nav-item dropdown" style={{ marginRight: "65px" }}>
                <a
                  class="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdownMenuLink"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Options
                </a>
                <ul
                  class="dropdown-menu"
                  aria-labelledby="navbarDropdownMenuLink"
                >
                  <li>
                    <a class="dropdown-item" href="#">
                      Wishlist
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="/userInfo">
                      Update Profile
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#" onClick={handleSignOut}>
                      Logout
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
