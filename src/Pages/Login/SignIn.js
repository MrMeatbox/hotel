import { async } from "@firebase/util";
import React from "react";
import { useState } from "react";
import "./Login.css";

const Test = () => {
  const upload = async (event) => {
    event.preventDefault();
    const { resortName, resortLocation, resortPrice, resortRating } =
      resortData;
    const res = await fetch(
      "https://hotelapp-d4bdc-default-rtdb.firebaseio.com/resortRecord.json",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          resortName,
          resortLocation,
          resortPrice,
          resortRating,
        }),
      }
    );
    if (res) {
      alert("Data uploaded successfully!");
    } else {
      alert("Something went wrong!");
    }
  };
  const [resortData, setResortData] = useState({
    resortName: "",
    resortLocation: "",
    resortPrice: "",
    resortRating: "",
  });
  const uploadHotel = async (event) => {
    event.preventDefault();
    const { hotelName, hotelLocation, hotelPrice, hotelRating } = hotelData;
    const res = await fetch(
      "https://hotelapp-d4bdc-default-rtdb.firebaseio.com/hotelRecord.json",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          hotelName,
          hotelLocation,
          hotelPrice,
          hotelRating,
        }),
      }
    );
    if (res) {
      alert("Data uploaded successfully!");
    } else {
      alert("Something went wrong!");
    }
  };
  const [hotelData, setHotelData] = useState({
    hotelName: "",
    hotelLocation: "",
    hotelPrice: "",
    hotelRating: "",
  });
  let name, value;
  const postResortData = (event) => {
    name = event.target.name;
    value = event.target.value;
    setResortData({ ...resortData, [name]: [value] });
  };

  let nam, val;
  const postHotelData = (event) => {
    nam = event.target.name;
    val = event.target.value;
    setHotelData({ ...hotelData, [nam]: [val] });
  };
  return (
    <div>
      <br />
      <br />
      <br />
      <br />
      <center>
        <div>
          <h2> RESORT INFORMATION</h2>
          <div>
            <input
              style={{ border: "5px" }}
              placeholder="Resort name"
              name="resortName"
              onChange={postResortData}
              value={resortData.resortName}
            ></input>
            <br />
            <input
              placeholder="Resort location"
              name="resortLocation"
              onChange={postResortData}
              value={resortData.resortLocation}
            ></input>
            <br />
            <input
              placeholder="Price"
              name="resortPrice"
              onChange={postResortData}
              value={resortData.resortPrice}
            ></input>
            <br />
            <input
              placeholder="Average ratings"
              name="resortRating"
              onChange={postResortData}
              value={resortData.resortRating}
            ></input>
            <br />
            <br />
            <button onClick={upload}>Upload resort to database</button>
            <br />
          </div>
        </div>
      </center>
      <br />
      <br />
      <br />
      <br />
      <center>
        <div>
          <h2> HOTEL INFORMATION</h2>
          <div>
            <input
              placeholder="Hotel name"
              name="hotelName"
              onChange={postHotelData}
              value={hotelData.hotelName}
            ></input>
            <br />
            <input
              placeholder="Hotel location"
              name="hotelLocation"
              onChange={postHotelData}
              value={hotelData.hotelLocation}
            ></input>
            <br />
            <input
              placeholder="Price"
              name="hotelPrice"
              onChange={postHotelData}
              value={hotelData.hotelPrice}
            ></input>
            <br />
            <input
              placeholder="Average ratings"
              name="hotelRating"
              onChange={postHotelData}
              value={hotelData.hotelRating}
            ></input>
            <br />
            <br />
            <button onClick={uploadHotel}>Upload hotel to database</button>
            <br />
          </div>
        </div>
      </center>
    </div>
  );
};

export default Test;
