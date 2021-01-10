import React from "react";
import "./add.scss";
import { useState } from "react";
import axios from 'axios';
import logo from './logo.png';

import {
    Link,
  } from "react-router-dom";

  const API_URL = 'bluewater10000.pythonanywhere.com'
  // const API_URL = 'localhost:8000'

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

    const { value, bind, reset } = useInput('');

    const handleSubmit = (evt) => {
      evt.preventDefault();
      reset();
      const fridgeFoodItem = { 
        fridge_food_name: value 
      
      };
      let url = `http://${API_URL}/api/fridgeFoods/`;
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