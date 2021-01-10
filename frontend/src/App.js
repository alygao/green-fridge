import React from "react";
import "./style.scss";
import Home from "./homepage";
import View from "./fridge";
import Add from "./add";
import LogIn from "./login";
import Create from "./create.js";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
  withRouter
} from "react-router-dom";



 function App() {
  return ( <Router>
    <Switch>
    <Route path="homepage/upload">
    <Add />
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
        <Route path="/register">
          <Create />
        </Route>
        <Route exact path="/homepage">
        <Home />
        </Route>
        <Route exact path="/">
        <InitialPage {...initialPageData} />
        </Route>
      </Switch>
    </Router>) ;
}
export default App;

function InitialPage(props) {
  const { joinNow, stepsToSustainabil, ellipse1, carrot, text1 } = props;
  return (
    <div className="initial-page">
      <div className="overlap-group">
        <div className="rectangle-5 animate-enter"></div>
        <div className="button">
         <div>
           <Link to="/login" style={{ textDecoration: 'none' }} className="join-now valign-text-middle border-class-1 montserrat-bold-white-32px">{joinNow}
        </Link> </div>
        </div>
        <div className="steps-to-sustainabil valign-text-middle border-class-1 montserrat-normal-fruit-salad-37px">
          {stepsToSustainabil}
        </div>
        <img className="ellipse-1" src={ellipse1} />
        <img className="carrot" src={carrot} />
        <h1 className="text-1 valign-text-middle border-class-1 montserrat-bold-black-60px">{text1}</h1>
      </div>
      </div>
  );
}
const initialPageData = {
    joinNow: "join now",
    stepsToSustainabil: "our steps towards sustainability and cutting out food waste",
    ellipse1: "https://anima-uploads.s3.amazonaws.com/projects/5ff9b0d037305af6fed446e1/releases/5ff9d67a52d314f96bfdf13e/img/ellipse-1@2x.png",
    carrot: "https://anima-uploads.s3.amazonaws.com/projects/5ff9b0d037305af6fed446e1/releases/5ff9d67a52d314f96bfdf13e/img/carrot@2x.png",
    text1: "Welcome to Green Fridge!",
};




