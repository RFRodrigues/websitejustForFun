import React, { Component } from 'react';
import './App.css';
import Navbar from './Navbar'
import firebase from "firebase";
import Home from './Home'
import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";




// Initialize Firebase
var config = {
  apiKey: "AIzaSyB2kWP2XADdb2qpRWUi_BdC3nf7b6VUuvQ",
  authDomain: "mywebsiteforfun-68215.firebaseapp.com",
  databaseURL: "https://mywebsiteforfun-68215.firebaseio.com",
  projectId: "mywebsiteforfun-68215",
  storageBucket: "mywebsiteforfun-68215.appspot.com",
  messagingSenderId: "295158257080"
};
firebase.initializeApp(config);

var database = firebase.database();

const BasicExample = () => (
  <Router>
    <div>
      <Navbar/>
      
      

    </div>
  </Router>
);



const About = () => (
  <div>
    <h2>About</h2>
  </div>
);

const Topics = ({ match }) => (
  <div>
    <h2>Topics</h2>
    <ul>
      <li>
        <Link to={`${match.url}/rendering`}>Rendering with React</Link>
      </li>
      <li>
        <Link to={`${match.url}/components`}>Components</Link>
      </li>
      <li>
        <Link to={`${match.url}/props-v-state`}>Props v. State</Link>
      </li>
    </ul>

    <Route path={`${match.url}/:topicId`} component={Topic} />
    <Route
      exact
      path={match.url}
      render={() => <h3>Please select a topic.</h3>}
    />
  </div>
);

const Topic = ({ match }) => (
  <div>
    <h3>{match.params.topicId}</h3>
  </div>
);

export default BasicExample;
