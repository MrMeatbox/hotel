//import "./bookHotel.css";
const Book = () => {
  let Hotels = [
    {
      name: "Hotel 1",
      price: "100",
      image:
        "https://images.unsplash.com/photo-1455587734955-081b22074882?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    },

    {
      name: "Hotel 2",
      price: "200",
      image:
        "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    },
    {
      name: "Hotel 3",
      price: "300",
      image:
        "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    },
    {
      name: "Hotel 4",
      price: "400",
      image:
        "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    },
  ];
  return (
    <div className="box">
      <div className="content">
        <div className="text">Find best hotel</div>
        <div className="target">
          <div className="target">
            <div className="card">
              <img src="" id="targetImage" alt="" />
              <div className="hotel_name" id="targetName"></div>
              <div className="price" id="targetPrice"></div>
            </div>
          </div>
        </div>
        <div className="cards">
          <div className="cards_box">
            <div className="card">
              <img src={Hotels[0].image} alt="hotel1" />
              <div className="hotel_name">{Hotels[0].name}</div>
              <div className="price">{"$" + Hotels[0].price}</div>
            </div>
            {/*  */}
            <div className="card">
              <img src={Hotels[1].image} alt="hotel2" />
              <div className="hotel_name">{Hotels[1].name}</div>
              <div className="price">{"$" + Hotels[1].price}</div>
            </div>
            {/*  */}
            <div className="card">
              <img src={Hotels[2].image} alt="hotel3" />
              <div className="hotel_name">{Hotels[2].name}</div>
              <div className="price">{"$" + Hotels[2].price}</div>
            </div>
            {/*  */}
            <div className="card">
              <img src={Hotels[3].image} alt="hotel4" />
              <div className="hotel_name">{Hotels[3].name}</div>
              <div className="price">{"$" + Hotels[3].price}</div>
            </div>
          </div>
          <div className="request">
            <button className="btn">Request</button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Book;