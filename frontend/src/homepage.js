import React from "react";
import { useState, useEffect } from 'react';
import "./homepage.scss";
import {
  Link,
} from "react-router-dom";
import carrot from './carrot.png';
import axios from 'axios';


function Home() {
    return <HomePage />;
}

  export default Home;

  function HomePage(props) {

    const APP_ID = '49a56d5f';
    const APP_KEY = 'f731d4f7e6dacb6dc592c8f1e917677d';

    const [expiredItemsInFridge, setExpiredItemsInFridge] = useState(null);
    const [aboutToExpireItem, setAboutToExpireItem] = useState(null);
    const [recipe, setRecipe] = useState(null);
    const [query, setQuery] = useState(null);

    useEffect(() => {
      // You need to restrict it at some point
      // This is just dummy code and should be replaced by actual
      if (!expiredItemsInFridge) {
        getExpiredItemsInFridge();
      }
      if (!aboutToExpireItem) {
        getAboutToExpireItem();
      }
      if (!recipe) {
        getRecipe();
      }
    }, []);

    const getRecipe = async () => {
      console.log('aaa');
      const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`)
      const data = await response.json();
      setRecipe(data.hits[0]);
      console.log(data.hits[0]);
    }
 
  const getExpiredItemsInFridge = async () => {
    console.log('bbb');
      const response = await fetch('http://localhost:8000/api/fridgeFoods/expired');
      const data = await response.json();
      setExpiredItemsInFridge(data)
      console.log(data);
  };

  const getAboutToExpireItem = async () => {
    console.log('ccc');
    const response = await fetch('http://localhost:8000/api/fridgeFoods/');
    const data = await response.json();
    // for (var i = 0; i < data.length; i++) {
    //   if (data[i].days_to_expire == 0) {
    //     delete data[i];
    //   } else {
    //     break;
    //   }
    // }
    // setTimeout(function() {

    // }, 1000);
    setAboutToExpireItem(data[0])
    console.log(data[0]);
    setQuery(data[0])
    // setRecipe(null)
    // getRecipe();
  };




  // async fetchExpiredItemsInFridgeAsync() {
  //   try {
  //       this.setState({...this.state, isFetching: true});
  //       const response = await axios.get(http://localhost:8000/api/fridgeFoods/expired'L);
  //       this.setState({users: response.data, isFetching: false});
  //   } catch (e) {
  //       console.log(e);
  //       this.setState({...this.state, isFetching: false});
  //   }
  // };


    return (
      <div className="home-page">
        <div className="heading">
          <img className="carrot" src={carrot} />
          <h1 className="homepage-title">Welcome to your Green Fridge!</h1>
          <p className="upload-recipe-msg">buy less, choose well</p>
        </div>
        <div className="homepage-buttons">
          <Link to="/homepage/upload">
            <button className="menuButtons">upload receipt</button>
          </Link>
          <Link to="/homepage/add">
            <button className="menuButtons">enter items</button>
          </Link>
          <Link to="/homepage/fridge">
            <button className="menuButtons">view fridge</button>
          </Link>
        </div>
        <div className="alerts">
          <div className="alerts-header">
              <h2>alerts</h2>
          </div>
            {expiredItemsInFridge && expiredItemsInFridge.length > 0 
              ? <ul>
                  {expiredItemsInFridge.map((item, index) => {
                    return <li key={item.id}>The <b>{item.fridge_food_name}</b> that you bought on {item.fridge_food_bought_date} has expired. Please remove it from fridge!</li>
                  })}
                </ul>
              : <p>You have no expired items in your fridge. Good job!</p>
            }
        </div>
        <div className="recommended-recipe">
          <div className="recommended-recipe-header">
                <h2>recommended recipe</h2>
            </div>
            {query && aboutToExpireItem && recipe
            ?
              <p>
                  The following recipe has been recommended to you because it incorporates {aboutToExpireItem.fridge_food_name} which is the closest to expiring. 
                  Your recommended recipe is: 
                  <a href='https://www.epicurious.com/recipes/food/views/frozen-yogurt-bark'>Frozen Yogurt Bark!</a>
              </p>
            :
              <p>You have no items in your fridge. Hurry up and go shopping! Sustainable eating does not mean you need to starve yourself!</p>
            }
        </div>
      </div>
    )
  }
  

  