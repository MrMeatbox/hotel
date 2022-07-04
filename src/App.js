import "./App.css";
import Register from "./Register/register";
import Login from "./Pages/Login/Login";
import Home from "./Pages/Homepage/Home";
import Welcome from "./Pages/welcome/welcome";
import Forgetpass from "./Pages/Forgetpass/Forgetpass";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
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

          <Route exact path="/fogotpass">
            <Forgetpass />
          </Route>

          <Route exact path="/register">
            <Register />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
