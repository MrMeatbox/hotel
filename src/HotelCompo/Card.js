import React from "react";
import "./Card.css";
import project_logo from ".././components/tanguar.jpg";

const Card = ({ data }) => {
  console.log(data);
  const bookHotel = () => {
    alert("Added to cart!");
  };
  return (
    <div>
      {data &&
        data.map((data, i) => (
          <div className=" p-2" key={i}>
            <div className="card ">
              <div className="imgbox">
                <img src="https://source.unsplash.com/Koei_7yYtIo"></img>
              </div>
              <div className="card-body">
                <div className="img-box rounded-circle"></div>
                <div className="content">
                  <h6>Name: {data.hotelName[0]}</h6>
                  <p className="text-capitalize">
                    loacation: {data.hotelLocation[0]}
                  </p>
                  <p className="text-capitalize">
                    Price: {data.hotelPrice[0]} BDT
                  </p>
                  <p className="text-capitalize">
                    Rating: {data.hotelRating[0]}
                  </p>
                </div>
                <button className="book-btn" onClick={bookHotel}>
                  Book it!
                </button>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
};

export default Card;
