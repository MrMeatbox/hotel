import React, { useState } from "react";
import { useEffect } from "react";
import "./home.css";
import { onAuthStateChanged } from "firebase/auth";
import { useHistory } from "react-router-dom";
import { auth } from "../../Config/firebaseConfig";
import Navbar from "../Navbar/Navbar";
import { initializeApp } from "firebase/app";
import { getDatabase, ref, set } from "firebase/database";

const Home = () => {
  return (
    <div>
      <Navbar />
      <div>
        <center>
          <h2>You have no recent bookings!</h2>
        </center>
      </div>
    </div>
  );
};

export default Home;
