import React, { Component } from 'react';
import './App.css';
import './style/Home.scss'
import firebase from "firebase";
import 'bootstrap/dist/css/bootstrap.css';
import { Link } from 'react-router-dom';
import ReactPlayer from 'react-player'
import { Grid, Row, Col, Table, Dropdown, MenuItem, Panel, Modal, Button, FormGroup, Form, ControlLabel, FormControl } from 'react-bootstrap';



var video = document.getElementById("myVideo");

class Home extends Component {

  constructor(props, context) {
    super(props, context);

    this.state = {
      nome: ''
    };

    this.handleChange = this.handleChange.bind(this)

  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
}

handleSubmit(){
  
}


  render() {
    return (
      <div className="App">

        <div className="btn-start">
          <FormGroup>
            <p>Player Name:</p>
            <FormControl
              name="nome"
              type="text"
              value={this.state.nome}
              placeholder="Enter a name"
              onChange={this.handleChange}
            />
          </FormGroup>

          <Button onClick={this.handleSubmit}>Start</Button>

        </div>


        <ReactPlayer className='react-player' url='https://giant.gfycat.com/SingleSilkyFruitfly.webm' playing loop />
      </div>
    );
  }
}

export default Home;
