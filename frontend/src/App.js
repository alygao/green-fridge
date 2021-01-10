import React from "react";
import "./style.scss";
// import "./App.css";
import Home from "./homepage";
import View from "./fridge";
import Add from "./add";
import LogIn from "./login";
import Create from "./create.js";
import Upload from "./upload";
import logo from './logo.png';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  // useParams,
  // withRouter
} from "react-router-dom";



 function App() {
  return ( <Router>
    <Switch>
    <Route path="/homepage/upload">
          <Upload />
        </Route>
        <Route path="/homepage/add">
        <Add />
        </Route>
        <Route path="/homepage/fridge">
        <View />
        </Route>
    <Route path="/login">
          <LogIn />
        </Route>
        {/* <Route path="/register">
          <Create />
        </Route> */}
        <Route exact path="/homepage">
        <Home />
        </Route>
        <Route exact path="/">
        <InitialPage />
        </Route>
      </Switch>
    </Router>) ;
}
export default App;

function InitialPage(props) {
  // const { joinNow, stepsToSustainabil, ellipse1, carrot, text1 } = props;
  return (
    <div className="initial-page">  
      <div className="heading">
          <img className="carrot" src={logo} ></img>
          <h1 className="welcome-title">Welcome to Green Fridge!</h1>
          <p className="welcome-msg">our steps towards sustainability and cutting out food waste</p>
        </div>
        <div className="temp-div">
          <Link to="/login">
            <div className="join-now">
                <button className="join-now-button">join now</button>
            </div>
          </Link>
        </div>
      </div>
  );
}




