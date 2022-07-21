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
  let name, value;
  const postResortData = (event) => {
    name = event.target.name;
    value = event.target.value;
    setResortData({ ...resortData, [name]: [value] });
  };
  return (
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
        <button onClick={upload}>Upload to database</button>
      </div>
    </div>
  );
};

export default Test;
