import React, { Component, Redirect } from 'react';
import axios from 'axios';
import logo from './logo.png';


import {
  Link,
} from "react-router-dom";

import "./upload.scss";

function Upload() {
  return <UploadReceipt />;
}

export default Upload;


class UploadReceipt extends Component {
  state = {
    file: null
  };

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  };

  handleImageChange = (e) => {
    this.setState({
      file: e.target.files[0]
    })
  };  

  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);
    let form_data = new FormData();
    form_data.append('file', this.state.file, this.state.file.name);
    // let url = 'http://localhost:8000/api/receipts/';
    let url = 'http://localhost:8000/api/receipts/';
    axios.post(url, form_data, {
      headers: {
        'content-type': 'multipart/form-data'
      }
    })
        .then(res => {
          console.log(res.data);
        })
        .catch(err => console.log(err))
    alert('Any food items have now been added to your fridge. Happy Eating!')
    this.props.router.push('/homepage')  
  };

  render() {
    return (
      <div>
        <Link to="/homepage"> 
          <img className="carrot" src={logo} ></img>
        </Link>
        <h1 className="upload-recipe-heading">Upload Receipt</h1>
        <p className="upload-recipe-msg">Please only submit receipts that are either png or jpg form.</p>
        <form onSubmit={this.handleSubmit}>
          <div className="buttons">
            <p>
            <div className="choose-file-button">
            <label className="custom-file-upload">
              <input type="file"
                    id="image"
                    accept="image/png, image/jpeg"  onChange={this.handleImageChange} size="60" required/>
              choose a file
          </label>
            </div>
            </p>
            
            <div className="submit-button">
              <label className="submit-file">
                <input type="submit" size="60" />
                submit
              </label>
            </div>
          </div>
        </form>
      </div>
    );
  }
}



