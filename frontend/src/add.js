import React from "react";
import "./add.scss";
import {
    Link,
  } from "react-router-dom";

function Add() {
    return <AddFridgeItem {...AddFridgeItemData} />;
}

export default Add;

function AddFridgeItem(props) {
    const { logo, carrot, addFridgeItem, text1, add, overlapgroup2Props, overlapgroup22Props } = props;
  
    return (
      <div className="add-fridge-item">
        <div className="auto-flex">
        <Link to="/homepage"> <div className="logo" style={{ backgroundImage: `url(${logo})` }}>
         <img className="carrot" src={carrot} /> </div></Link> 
          <h1 className="add-fridge-item valign-text-middle border-class-1 montserrat-bold-copperfield-50px">
            {addFridgeItem}
          </h1>
        </div>
        <div className="text-1 valign-text-middle border-class-1 roboto-normal-black-20px">{text1}</div>
        <Overlapgroup2 {...overlapgroup2Props} />
        <div className="overlap-group1">
          <div>
           <Link to="/homepage" style={{ textDecoration: 'none' }} className="add valign-text-middle border-class-1 montserrat-bold-white-20px">{add}
        </Link> </div>
        </div>
        <div>
        </div>
      </div>
    );
  }
  
  
  function Overlapgroup2(props) {
    const { inputName, inputType, inputPlaceholder, inputRequired, name, className } = props;
  
    return (
      <div className={`overlap-group2 ${className || ""}`}>
        <div className="rectangle-4"></div>
        <textarea
          className="insert- border-class-1 montserrat-normal-silver-chalice-48px"
          name={inputName}
          placeholder={inputPlaceholder}
          type={inputType}
          required={inputRequired}
        ></textarea>
        <div className="name valign-text-middle border-class-1 montserrat-bold-fuscous-gray-38px">{name}</div>
      </div>
    );
  }
  const overlapgroup2Data = {
      inputName: "insert-item5",
      inputType: "text",
      inputPlaceholder: "insert item",
      inputRequired: true,
      name: "name:",
  };
  
  
  const AddFridgeItemData = {
      logo: "https://anima-uploads.s3.amazonaws.com/projects/5ff9b0d037305af6fed446e1/releases/5ff9d67a52d314f96bfdf13e/img/ellipse-1-1@2x.png",
      carrot: "https://anima-uploads.s3.amazonaws.com/projects/5ff9b0d037305af6fed446e1/releases/5ff9d67a52d314f96bfdf13e/img/carrot-2@2x.png",
      addFridgeItem: "Add Fridge Item",
      text1: "Please enter the food item as well as selecting the date you bought it.",
      add: "add",
      overlapgroup2Props: overlapgroup2Data,
  };
  
  
function addItem() {
  //add
  //<button onClick= {addItem}>"add valign-text-middle border-class-1 montserrat-bold-white-20px"{add}</button></div>
  //temp redirect to homepage
}