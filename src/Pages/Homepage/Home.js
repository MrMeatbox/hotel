import React, { useState } from "react";
import "./home.css";
import { auth } from "../../Config/firebaseConfig";
import Navbar from "../Navbar/Navbar";
import { initializeApp } from "firebase/app";
import { getDatabase, ref, set } from "firebase/database";

const Home = () => {
  return (
    <div>
      <Navbar />
      <div className="container">
        <div className="content">
          <div className="text">Choose date</div>
          <div className="form2">
            <div className="txt">Date and time you woild like to stay</div>
            <form action="">
              <div className="inputData">
                <input type="date" name="" id="book-date" />
              </div>
              <div className="inputData">
                <input type="time" name="" id="book-time" />
              </div>
              <div className="txt">Date and time you woild like to leave</div>
              <div className="inputData">
                <input type="date" name="" id="leave-date" />
              </div>
              <div className="inputData">
                <input type="time" name="" id="leave-time" />
              </div>
              <div className="book">
                <button type="submit">Confirm</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
