import { async } from "@firebase/util";
import React from "react";
import { useState } from "react";

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
      <div>
        <h2> RESORT INFORMATION</h2>
        <div>
          <input
            placeholder="Resort name"
            name="resortName"
            onChange={postResortData}
            value={resortData.resortName}
          ></input>
          <input
            placeholder="Resort location"
            name="resortLocation"
            onChange={postResortData}
            value={resortData.resortLocation}
          ></input>
          <input
            placeholder="Price"
            name="resortPrice"
            onChange={postResortData}
            value={resortData.resortPrice}
          ></input>
          <input
            placeholder="Average ratings"
            name="resortRating"
            onChange={postResortData}
            value={resortData.resortRating}
          ></input>
          <button onClick={upload}>Upload resort to database</button>
        </div>
      </div>

      <div>
        <h2> HOTEL INFORMATION</h2>
        <div>
          <input
            placeholder="Hotel name"
            name="hotelName"
            onChange={postHotelData}
            value={hotelData.hotelName}
          ></input>
          <input
            placeholder="Hotel location"
            name="hotelLocation"
            onChange={postHotelData}
            value={hotelData.hotelLocation}
          ></input>
          <input
            placeholder="Price"
            name="hotelPrice"
            onChange={postHotelData}
            value={hotelData.hotelPrice}
          ></input>
          <input
            placeholder="Average ratings"
            name="hotelRating"
            onChange={postHotelData}
            value={hotelData.hotelRating}
          ></input>
          <button onClick={uploadHotel}>Upload hotel to database</button>
        </div>
      </div>
    </div>
  );
};

export default Test;
