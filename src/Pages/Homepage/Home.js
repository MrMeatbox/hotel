import React from "react";
//import '../../App.css';
import "./home.css";
import Jobs from "../Object/sample";
import Navbar from "../Navbar/Navbar";

const Home = () => {
  const arr = () => {
    console.log(Jobs);
    console.log(Jobs[1].name);
  };
  return (
    <div className="main">
      <Navbar />
      <h2 className="text-center text-danger text-capitalize">
        You'll see it after login!
      </h2>
      <button onClick={arr}>click</button>
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="card">
              <img src={Jobs[0].imgscr} alt="..." height="200px" />
              <div className="card-body">
                <h5 className="card-title">{Jobs[0].name}</h5>
                <p className="card-text">{Jobs[0].address}</p>
                <a href="#" className="btn btn-primary">
                  Details
                </a>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card">
              <img src={Jobs[1].imgscr} alt="..." height="200px" />
              <div className="card-body">
                <h5 className="card-title">{Jobs[1].name}</h5>
                <p className="card-text">{Jobs[1].address}</p>
                <a href="#" className="btn btn-primary">
                  Details
                </a>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card">
              <img
                src="https://picsum.photos/200"
                className="card-img-top"
                alt="..."
                height="200px"
              />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a href="#" className="btn btn-primary">
                  Go somewhere
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
