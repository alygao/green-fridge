import React from "react";
import "./style.scss";
import "./login.scss";
import "./create.scss";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
  useRouteMatch
} from "react-router-dom";


 function App() {
  return ( <Router>
    <Switch>
    <Route path="/login">
          <Frame2 {...Frame2Data} />
        </Route>
        <Route path="/register">
          <CreateAccount {...CreateAccountData} />
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


function Frame2(props) {
  const { text1, line1, logIn, signUp, overlapgroup1Props, overlapgroup12Props } = props;

  return (
    <div className="frame-2">
      <div className="overlap-group2">
        <h1 className="text-1 valign-text-middle border-class-1 poppins-normal-fruit-salad-96px">{text1}</h1>
        <img className="line-1" src={line1} />
      </div>
      <Overlapgroup1 {...overlapgroup1Props} />
      <Overlapgroup1 {...overlapgroup12Props} className="overlap-group" />
      <div className="group-4">
        <div className="log-in valign-text-middle border-class-1 poppins-normal-white-72px">{logIn}</div>
      </div>
      <div>
      <Link to="/register" style={{ textDecoration: 'none' }} className="sign-up valign-text-middle border-class-1 poppins-normal-fruit-salad-72px">{signUp}
        </Link> </div>
    </div>
  );
}


function Overlapgroup1(props) {
  const { inputName, inputType, inputPlaceholder, inputRequired, className } = props;

  return (
    <div className={`overlap-group1 ${className || ""}`}>
      <div className="rectangle-"></div>
      <textarea
        className="username border-class-1 play-normal-black-48px"
        name={inputName}
        placeholder={inputPlaceholder}
        type={inputType}
        required={inputRequired}
      ></textarea>
    </div>
  );
}
const overlapgroup1Data = {
    inputName: "username4",
    inputType: "text",
    inputPlaceholder: " Username",
    inputRequired: true,
};

const overlapgroup12Data = {
    inputName: "password7",
    inputType: "password",
    inputPlaceholder: " Password",
    inputRequired: true,
};

const Frame2Data = {
    text1: "Welcome to Green Fridge",
    line1: "https://anima-uploads.s3.amazonaws.com/projects/5ff9b0d037305af6fed446e1/releases/5ff9d67a52d314f96bfdf13e/img/line-1@1x.png",
    logIn: "Log In",
    signUp: "Sign Up",
    overlapgroup1Props: overlapgroup1Data,
    overlapgroup12Props: overlapgroup12Data,
};


function CreateAccount(props) {
  const { createAccount, register, overlapgroupProps, overlapgroup2Props, overlapgroup3Props } = props;

  return (
    <div className="create-account" name="form1" action="form1" method="post">
      <h1 className="create-account valign-text-middle border-class-1 poppins-normal-fruit-salad-96px">
        {createAccount}
      </h1>
      <Overlapgroup {...overlapgroupProps} />
      <Overlapgroup {...overlapgroup2Props} />
      <Overlapgroup {...overlapgroup3Props} />
      <div className="group-5">
          <div className="register valign-text-middle border-class-1 poppins-normal-white-72px">{register}</div>
      </div>
    </div>
  );
}


function Overlapgroup(props) {
  const { inputName, inputType, inputPlaceholder, inputRequired } = props;

  return (
    <div className="overlap-group">
      <div className="rectangle-"></div>
      <textarea
        className="username border-class-1 play-normal-mountain-mist-48px"
        name={inputName}
        placeholder={inputPlaceholder}
        type={inputType}
        required={inputRequired}
      ></textarea>
    </div>
  );
}
const overlapgroupData = {
    inputName: "username10",
    inputType: "text",
    inputPlaceholder: " Username",
    inputRequired: true,
};

const overlapgroup2Data = {
    inputName: "password3",
    inputType: "password",
    inputPlaceholder: " Password",
    inputRequired: true,
};

const overlapgroup3Data = {
    inputName: "confirm-password6",
    inputType: "password",
    inputPlaceholder: " Confirm Password",
    inputRequired: true,
};

const CreateAccountData = {
    createAccount: "Create Account",
    register: "Register",
    overlapgroupProps: overlapgroupData,
    overlapgroup2Props: overlapgroup2Data,
    overlapgroup3Props: overlapgroup3Data,
};

