import React, { useState } from "react";
import "./home.css";
import { auth } from "../../Config/firebaseConfig";
import Navbar from "../Navbar/Navbar";
import { initializeApp } from "firebase/app";
import { getDatabase, ref, set } from "firebase/database";

const Home = () => {
  // const [valid, setvalid] = useState(true);
  // const [hide, sethide] = useState(true);
  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   const book_date = document.getElementById("book-date");
  //   const book_time = document.getElementById("book-time");

  //   const leave_date = document.getElementById("leave-date");
  //   const leave_time = document.getElementById("leave-time");

  //   if (
  //     !book_date.value ||
  //     !book_time.value ||
  //     !leave_date.value ||
  //     !leave_time.value
  //   ) {
  //     alert("Please fill all the fields");
  //   } else {
  //     writeUserData();
  //     function writeUserData() {
  //       const db = getDatabase();
  //       set(ref(db, "data/"), {
  //         bookingdate: book_date.value,
  //         bookingtime: book_time.value,
  //         leave_date: leave_date.value,
  //         leave_time: leave_time.value,
  //       });
  //     }
  //     alert("Your booking has been made");
  //     // const BookPageDiv = document.querySelector(".box");
  //     // const container = document.querySelector(".container");
  //     // setvalid(!valid + BookPageDiv.classList.add("show"));
  //     // sethide(!hide + container.classList.add("hide"));
  //   }
  // };
  return (
    <div className="main">
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
