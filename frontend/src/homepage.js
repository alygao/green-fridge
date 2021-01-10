import React from "react";
import "./homepage.scss";
import {
  Link,
} from "react-router-dom";

function Home() {
    return <HomePage {...HomePageData} />;
}

  export default Home;

  function HomePage(props) {
    const {
      text1,
      text2,
      carrot,
      alerts,
      text3,
      recommendedRecipe,
      spanText,
      spanText2,
    } = props;
  
    return (
      <div className="home-page">
        <div className="overlap-group">
          <div className="text-1 valign-text-middle border-class-1 montserrat-normal-fruit-salad-37px">{text1}</div>
          <h1 className="text-2 valign-text-middle border-class-1 montserrat-normal-black-54px">{text2}</h1>
          <img className="carrot" src={carrot} />
        </div>
        <div className="auto-flex">
          <div className="group-23">
            <UploadReceiptButton1 />
          </div>
          <div className="group-22">
            <UploadReceiptButton2 />
          </div>
          <div className="group-21">
            <UploadReceiptButton3 />
          </div>
        </div>
        <div className="overlap-group1">
          <div className="rectangle-7 border-class-2"></div>
          <div className="alerts valign-text-middle border-class-1 montserrat-bold-black-32px">{alerts}</div>
          <div className="rectangle-8 border-class-2"></div>
          <div className="text-3 valign-text-middle border-class-1 roboto-normal-black-20px">{text3}</div>
        </div>
        <div className="overlap-group2">
          <div className="rectangle-7-1 border-class-2"></div>
          <div className="recommended-recipe valign-text-middle border-class-1 montserrat-bold-black-32px">
            {recommendedRecipe}
          </div>
          <div className="rectangle-9 border-class-2"></div>
          <div className="text-4 valign-text-middle border-class-1 roboto-normal-black-20px-2">
            <span>
              <span className="span1">{spanText}</span>
              <span className="span2">{spanText2}</span>
            </span>
          </div>
        </div>
      </div>
    );
  }
  
  
  function UploadReceiptButton1() {
    return (
      <div className="upload-rec-ipt-button">
        <div>
        <Link to="/homepage/upload" style={{ textDecoration: 'none' }} className="upload-receipt valign-text-middle border-class-1 montserrat-bold-white-32px">{"upload receipt"}
          </Link> </div>
      </div>
    );
  }
  
  function UploadReceiptButton2() {
    return (
      <div className="upload-rec-ipt-button">
        <div>
        <Link to="/homepage/add" style={{ textDecoration: 'none' }} className="upload-receipt valign-text-middle border-class-1 montserrat-bold-white-32px">{"enter items"}
          </Link> </div>
      </div>
    );
  }
  
  function UploadReceiptButton3() {
    return (
      <div className="upload-rec-ipt-button">
        <div>
        <Link to="/homepage/fridge" style={{ textDecoration: 'none' }} className="upload-receipt valign-text-middle border-class-1 montserrat-bold-white-32px">{"view fridge"}
          </Link> </div>
      </div>
    );
  }
  
  const HomePageData = {
      text1: "buy less, choose well",
      text2: "Welcome to your Green Fridge!",
      carrot: "https://anima-uploads.s3.amazonaws.com/projects/5ff9b0d037305af6fed446e1/releases/5ff9d67a52d314f96bfdf13e/img/carrot-1@2x.png",
      alerts: "alerts",
      text3: "Your milk bought on 01/02/2021 is about to expire in 2 days.",
      recommendedRecipe: "recommended recipe",
      spanText: "Your recommended recipe is: ",
      spanText2: "Hamburger",
  };
  //need to fix text3 and spantext2 -> gather from database
  
  