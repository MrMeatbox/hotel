//import "./bookHotel.css";
import { database } from "../../Config/firebaseConfig";
import { useState, useEffect } from "react";
import { Info } from "@mui/icons-material";
import { getDatabase } from "firebase/database";
import { ref, onValue } from "firebase/database";
const Book = () => {
  let dt;
  let records = [];
  const [data, setdata] = useState({
    resortName: "",
    resortLocation: "",
    resortPrice: "",
    resortRating: "",
  });
  const fetchData = () => {
    const dbRef = ref(database, "resortRecord");
    onValue(dbRef, (snapshot) => {
      snapshot.forEach((element) => {
        dt = element.val();
        records.push(element.val());
        //setdata(dt);
        console.log("A data:");
        console.log(element.val());
        setdata({ resortName: element.val().resortName[0] });
        setdata({ resortLocation: element.val().resortLocation[0] });
        setdata({ resortPrice: element.val().resortLocation[0] });
        // setdata({ resortRating: element.val().resortRating });
        console.log("Data variable: ");
        console.log(data);
      });
    });
  };
  const options = [];
  for (let i in records) {
    console.log(records[i]);
  }
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <center>
        <h2>Resort Info:</h2>
        <p>Resort name: {data.resortName}</p>
        <p>{data.resortLocation}</p>
        <p>{data.resortPrice}</p>
        <p>{data.resortRating}</p>
        {options}
      </center>
    </div>
  );
};

export default Book;
