import React from "react";
import "./add.scss";
import { useState } from "react";
import axios from 'axios';
import logo from './logo.png';

import {
    Link,
  } from "react-router-dom";

function Add() {
    return <AddFridgeItem />;
}

export default Add;

export const useInput = initialValue => {
  const [value, setValue] = useState(initialValue);

  return {
    value,
    setValue,
    reset: () => setValue(""),
    bind: {
      value,
      onChange: event => {
        setValue(event.target.value);
      }
    }
  };
};

function AddFridgeItem(props) {
    // const { logo, carrot, addFridgeItem, text1, add, overlapgroup2Props, overlapgroup22Props } = props;

    const { value, bind, reset } = useInput('');

    const handleSubmit = (evt) => {
      evt.preventDefault();
      // alert(`Submitting Item Name: ${value}`);
      reset();
      const fridgeFoodItem = { 
        fridge_food_name: value 
      
      };
      let url = 'http://localhost:8000/api/fridgeFoods/';
      axios.post(url, fridgeFoodItem)
      .then(res => {
          console.log(res.data);
        })
        .catch(err => console.log(err))
      };

      
    

    return (
      <div className="add-fridge-item">
        <Link to="/homepage"> 
          <img className="carrot" src={logo} ></img>
        </Link>
        <h1 className="add-item-heading">Add Item</h1>
        <p className="add-item-msg">Please input the name of the food item you wish to add to your fridge.</p>

        <form onSubmit={handleSubmit}>         
          <input className="add-item-field" type="text" {...bind}/>
          <div className="submit-button">
            <label className="submit-file">
              <input type="submit"value="add" size="60" />
              submit
            </label>
          </div>
        </form>
        
        

        <div>
      </div>
      </div>
    );
  }
  
//   // for the name: text area
//   function Overlapgroup2(props) {
//     const { inputName, inputType, inputPlaceholder, inputRequired, name, className } = props;
  
//     return (
//       <div className={`overlap-group2 ${className || ""}`}>
//         <div className="rectangle-4"></div>
//         {/* <textarea
//           className="insert- border-class-1 montserrat-normal-silver-chalice-48px"
//           name={inputName}
//           placeholder={inputPlaceholder}
//           type={inputType}
//           required={inputRequired}
//         ></textarea> */}
//         {/* <input type="text" {...bind} /> */}

//         <div className="name align-text-middle border-class-1 montserrat-bold-fuscous-gray-38px">{name}</div>
//       </div>
//     );
//   }
//   const overlapgroup2Data = {
//       inputName: "insert-item5",
//       inputType: "text",
//       inputPlaceholder: "insert item",
//       inputRequired: true,
//       name: "name:",
//   };
  
  
//   // const AddFridgeItemData = {
//   //     logo: "https://anima-uploads.s3.amazonaws.com/projects/5ff9b0d037305af6fed446e1/releases/5ff9d67a52d314f96bfdf13e/img/ellipse-1-1@2x.png",
//   //     carrot: "https://anima-uploads.s3.amazonaws.com/projects/5ff9b0d037305af6fed446e1/releases/5ff9d67a52d314f96bfdf13e/img/carrot-2@2x.png",
//   //     addFridgeItem: "Add Fridge Item",
//   //     text1: "Please enter the food item as well as selecting the date you bought it.",
//   //     add: "add",
//   //     overlapgroup2Props: overlapgroup2Data,
//   // };
  
  
// function addItem() {
//   //add
//   //<button onClick= {addItem}>"add valign-text-middle border-class-1 montserrat-bold-white-20px"{add}</button></div>
//   //temp redirect to homepage
// }