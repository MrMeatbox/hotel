import React from "react";
import { useState } from "react";
import "./userInfo.css";
const UserInfo = () => {
  const uploadData = async (event) => {
    event.preventDefault();
    const { userName, userFullName, userContact, userEmail } = userData;
    const res = await fetch(
      "https://hotelapp-d4bdc-default-rtdb.firebaseio.com/userInfo.json",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          userName,
          userFullName,
          userContact,
          userEmail,
        }),
      }
    );
    if (res) {
      alert("Data uploaded successfully!");
    } else {
      alert("Something went wrong!");
    }
  };
  const [userData, setUserData] = useState({
    userName: "",
    userFullName: "",
    userContact: "",
    userEmail: "",
  });
  let name, value;
  const postUserData = (event) => {
    name = event.target.name;
    value = event.target.value;
    setUserData({ ...userData, [name]: [value] });
  };
  return (
    <div className="info-backgorund">
      <br />
      <br />
      <br />
      <br />
      <center>
        <h1 className="info-heading">Registration Succcessfull!</h1>
        <h3 className="info-heading">You are one step away!</h3>
        <input
          className="user-input"
          placeholder="User name"
          name="userName"
          onChange={postUserData}
          value={userData.userName}
        />
        <br />
        <input
          className="user-input"
          placeholder="Full name"
          name="userFullName"
          onChange={postUserData}
          value={userData.userFullName}
        />
        <br />
        <input
          className="user-input"
          placeholder="Email address"
          name="userEmail"
          onChange={postUserData}
          value={userData.userEmail}
        />
        <br />
        <input
          className="user-input"
          placeholder="Contact number"
          name="userContact"
          onChange={postUserData}
          value={userData.userContact}
        />
        <br />
        <button className="info-submit" onClick={uploadData}>
          Submit
        </button>
      </center>
    </div>
  );
};
export default UserInfo;
