import React, { useState } from "react";
import "./welcome.css";
import jobs from "../Object/sample";
import Axios from "axios";
import Navwel from "./navWel";
import { Link } from "react-router-dom";
import logo from "../../components/cable-car-cabin.png";

const Welcome = () => {
  const [x, setx] = useState("");
  const [date, setdate] = useState("");
  const joke = () => {
    Axios.get("https://api.chucknorris.io/jokes/random").then((response) => {
      //console.log(response);
      console.log(jobs);
      setx(response.data.value);
      setdate(response.data.created_at);
    });
  };

  const hotel = () => {
    Axios.get("https://travelpartner.googleapis.com").then((res) => {
      console.log(res);
    });
  };
  return (
    <div>
      <Navwel />
      <div>
        <button className="joke" onClick={joke}>
          click for joke!
        </button>
        <h3>The joke is: </h3>
        {x}
        <h3>Joke made on: </h3>
        {date}
      </div>
      <button className="joke" onClick={hotel}>
        Click for hotels
      </button>
    </div>
  );
};
export default Welcome;
