import React from "react";
import "./login.scss";
// import "./create.scss";
import carrot from './carrot.png';
import {
    Link,
  } from "react-router-dom";

  function LogIn() {
    return <Frame2 />;
  }

  export default LogIn;

  
function Frame2(props) {
  
    return (
      <div className="login-page">
        <div className="carrot-img">
          <img className="carrot" src={carrot} />
        </div>
        <div className="login-heading">
          <h1 className="login-title">Welcome to your Green Fridge!</h1>
        </div>

        <div className="login-info">
          <textarea className="login-textarea" placeholder='Username'></textarea>
          <textarea className="login-textarea" placeholder='Password'></textarea>
        </div>

        <div className="temp-div">
          <Link to="/homepage">
            <div className="login-success">
                <button className="login-button">log in</button>
            </div>
          </Link>
        </div>

      </div>
    );
  }
  