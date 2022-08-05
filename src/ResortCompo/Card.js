import React from "react";
import "./Card.css";
import project_logo from ".././components/tanguar.jpg";
import { useHistory } from "react-router-dom";

const Card = ({ data }) => {
  const history = useHistory();
  console.log(data);
  const bookResort = () => {
    history.push("/bookPage");
  };
  return (
    <div>
      {data &&
        data.map((data, i) => (
          <div className=" p-2" key={i}>
            <div className="card ">
              <div className="imgbox">
                <img src="https://source.unsplash.com/iNcUjbAdfNo"></img>
              </div>
              <div className="card-body">
                <div className="img-box rounded-circle"></div>
                <div className="content">
                  <h6>Name: {data.resortName[0]}</h6>
                  <p className="text-capitalize">
                    loacation: {data.resortLocation[0]}
                  </p>
                  <p className="text-capitalize">
                    Price: {data.resortPrice[0]} BDT
                  </p>
                  <p className="text-capitalize">
                    Rating: {data.resortRating[0]}
                  </p>
                </div>
                <button className="book-btn" onClick={bookResort}>
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
