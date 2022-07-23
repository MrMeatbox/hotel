import "./App.css";
import Register from "./Register/register";
import Login from "./Pages/Login/Login";
import Home from "./Pages/Homepage/Home";
import Book from "./Pages/BookHotel/bookHotel";
import BookResort from "./Pages/BookResort/bookResort";
import Welcome from "./Pages/welcome/welcome";
import Forgetpass from "./Pages/Forgetpass/Forgetpass";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SignIn from "./Pages/Login/SignIn";
function App() {
  return (
    <div>
      {/* <Login/>   
      <Login></Login>    */}
      <Router>
        <Switch>
          <Route exact path="/home">
            <Home></Home>
          </Route>

          <Route exact path="/login">
            <Login></Login>
          </Route>

          <Route exact path="/">
            <Welcome />
          </Route>

          <Route exact path="/test">
            <SignIn />
          </Route>

          <Route exact path="/fogotpass">
            <Forgetpass />
          </Route>

          <Route exact path="/register">
            <Register />
          </Route>

          <Route exact path="/bookResort">
            <Book />
          </Route>
          <Route exact path="/bookHotel">
            <BookResort />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
