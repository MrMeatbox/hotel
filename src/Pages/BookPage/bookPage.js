import React, { useState } from "react";
import "./bookPage.css";
import { auth } from "../../Config/firebaseConfig";

import { initializeApp } from "firebase/app";
import { getDatabase, ref, set } from "firebase/database";

const BookPage = () => {
  const booked = () => {
    alert("Successfully booked!");
  };
  return (
    <div>
      <div className="container">
        <div className="content">
          <div className="text">Choose convenient date</div>
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
                <button type="submit" onClick={booked}>
                  Confirm
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookPage;
