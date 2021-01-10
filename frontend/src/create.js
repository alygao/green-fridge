import React from "react";
import "./create.scss";
import {
    Link,
  } from "react-router-dom";

function Create() {
    return <CreateAccount {...CreateAccountData} />;
  }

  export default Create;

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
            <div>
             <Link to="/login" style={{ textDecoration: 'none' }} className="register valign-text-middle border-class-1 poppins-normal-white-72px">{register}
          </Link> </div>
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
  
  function checkPassword() {
    //if password matches username in database -> proceed
    //else alert wrong password
    //<button onClick= {checkPassword}>"log-in valign-text-middle border-class-1 poppins-normal-white-72px"{logIn}</button></div>
    //temp redirect to homepage
  }
  
  function checkDuplicate() {
    //if password and password matches -> proceed
    //if username does not exist in databsae ->proceed
    //else alert wrong password
    //<button onClick= {checkDuplicate}>"register valign-text-middle border-class-1 poppins-normal-white-72px"{register}</button></div>
    //temp redirect to account
  }