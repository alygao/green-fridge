import React from "react";
import "./login.scss";
import "./create.scss";
import {
    Link,
  } from "react-router-dom";

  function LogIn() {
    return <Frame2 {...Frame2Data} />;
  }

  export default LogIn;

  
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
        <div>
        <Link to="/homepage" style={{ textDecoration: 'none' }} className="log-in valign-text-middle border-class-1 poppins-normal-white-72px">{logIn} </Link> </div>
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
  
  