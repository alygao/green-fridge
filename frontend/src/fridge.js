import React from "react";
import "./fridge.scss";
import {
    Link,
} from "react-router-dom";

function View() {
    return <WhatsInYourFridge {...whatsInYourFridgeData} />;
}

  export default View;

function WhatsInYourFridge(props) {
    const {
      text1,
      logo,
      carrot,
      nameOfItem,
      spanText,
      spanText2,
      boughtDate,
      spanText3,
      spanText4,
      daysTillExpiry,
      spanText5,
      spanText6,
      remove,
      spanText7,
      spanText8,
    } = props;
  
    return (
      <div className="whats-in-your-fridge">
        <div className="overlap-group1">
          <h1 className="text-1 valign-text-middle border-class-1 montserrat-bold-copperfield-50px">{text1}</h1>
          <Link to="/homepage"> <div className="logo" style={{ backgroundImage: `url(${logo})` }}>
         <img className="carrot" src={carrot} /> </div></Link> 
        </div>
        <div className="overlap-group">
          <div className="rectangle-7 border-class-2"></div>
          <div className="name-of-item valign-text-middle border-class-1 montserrat-bold-black-32px">{nameOfItem}</div>
          <div className="rectangle-9 border-class-2"></div>
          <div className="text-2 valign-text-middle border-class-1 roboto-normal-white-20px-2">
            <span>
              <span className="span1-I88zsT">{spanText}</span>
              <span className="span2-1">{spanText2}</span>
            </span>
          </div>
          <div className="rectangle-7-1 border-class-2"></div>
          <div className="bought-date valign-text-middle border-class-1 montserrat-bold-black-32px">{boughtDate}</div>
          <div className="rectangle-9-1 border-class-2"></div>
          <div className="text-3 valign-text-middle border-class-1 roboto-normal-white-20px">
            <span>
              <span className="span1-1">{spanText3}</span>
              <span className="span2-1">{spanText4}</span>
            </span>
          </div>
          <div className="rectangle-7-2 border-class-2"></div>
          <div className="days-till-expiry valign-text-middle border-class-1 montserrat-bold-black-32px">
            {daysTillExpiry}
          </div>
          <div className="rectangle-9-2 border-class-2"></div>
          <div className="text-4 valign-text-middle border-class-1 roboto-normal-white-20px">
            <span>
              <span className="span1-1">{spanText5}</span>
              <span className="span2-1">{spanText6}</span>
            </span>
          </div>
          <div className="rectangle-7-3 border-class-2"></div>
          <div className="remove valign-text-middle border-class-1 montserrat-bold-black-32px">{remove}</div>
          <div className="rectangle-9-3 border-class-2"></div>
          <div className="text-5 valign-text-middle border-class-1 roboto-bold-white-21px">
            <span>
              <span className="span1-PxuYZg">{spanText7}</span>
              <span className="span2">{spanText8}</span>
            </span>
          </div>
        </div>
      </div>
    );
  }
  const whatsInYourFridgeData = {
      text1: "What’s in Your Fridge",
      logo: "https://anima-uploads.s3.amazonaws.com/projects/5ff9b0d037305af6fed446e1/releases/5ff9d67a52d314f96bfdf13e/img/ellipse-1-1@2x.png",
      carrot: "https://anima-uploads.s3.amazonaws.com/projects/5ff9b0d037305af6fed446e1/releases/5ff9d67a52d314f96bfdf13e/img/carrot-2@2x.png",
      nameOfItem: "name of item",
      spanText: <>milk<br/></>,
      spanText2: <><br/>cream cheese<br/><br/>butter<br/><br/>apple juice<br/><br/>tofu<br/><br/>eggs</>,
      boughtDate: "bought date",
      spanText3: <>01/01/2020<br/></>,
      spanText4: <><br/>01/04/2020<br/><br/>01/04/2020<br/><br/>01/04/2020<br/><br/>01/10/2020<br/><br/>01/10/2020</>,
      daysTillExpiry: "days till expiry",
      spanText5: <>0<br/></>,
      spanText6: <><br/>10<br/><br/>10<br/><br/>20<br/><br/>30<br/><br/>60</>,
      remove: "remove",
      spanText7: <>---<br/></>,
      spanText8: <><br/>---<br/><br/>---<br/><br/>---<br/><br/>---<br/><br/>---</>,
  };
  
  