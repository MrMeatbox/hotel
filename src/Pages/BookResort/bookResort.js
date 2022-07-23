import { database } from "../../Config/firebaseConfig";
import { useState, useEffect } from "react";
import { Info } from "@mui/icons-material";
import { getDatabase } from "firebase/database";
import { ref, onValue } from "firebase/database";
import React from "react";
import Card from "../../HotelCompo/Card";
import Register from "../../Register/register";
const BookResort = () => {
  const [data, setdata] = useState([]);

  const fetchData = () => {
    const dbRef = ref(database, "hotelRecord");
    onValue(dbRef, (snapshot) => {
      let records = [];
      snapshot.forEach((element) => {
        const dt = element.val();

        records.push(dt);

        setdata(records);
      });
    });
  };

  console.log(data);

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <center>
        <h2>Choose Hotel:</h2>
        <Card data={data} />
        {/* <p>Resort name: {data.resortName}</p>
        <p>{data.resortLocation}</p>
        <p>{data.resortPrice}</p>
        <p>{data.resortRating}</p>
        {options} */}
      </center>
    </div>
  );
};

export default BookResort;
