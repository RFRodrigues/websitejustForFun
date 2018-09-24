import React, { Component } from 'react';
import './App.css';
import firebase from "firebase";
import 'bootstrap/dist/css/bootstrap.css';
import { Link } from 'react-router-dom';
import ReactPlayer from 'react-player'


var video = document.getElementById("myVideo");

class Home extends Component {




  render() {
    return (
      <div className="App">


         <ReactPlayer className='react-player' url='https://giant.gfycat.com/GenerousBestFireant.webm' playing loop/>
      </div>
    );
  }
}

export default Home;
