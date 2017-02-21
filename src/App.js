import React, { Component } from 'react';
var firebase = require('firebase');
import {Grid, Col, Row} from 'react-bootstrap';
import axios from 'axios';
import './App.css';
import Header from './Components/Header';
import LeftNav from './Components/LeftNav';
import RightNav from './Components/RightNav';
import UserInfo from './Components/UserInfo';

var config = {
  apiKey: "AIzaSyCDbP7ky35rLj3gYxJFGeSNbJ_qbaBXoUQ",
  authDomain: "survey-f70d5.firebaseapp.com",
  databaseURL: "https://survey-f70d5.firebaseio.com",
  storageBucket: "survey-f70d5.appspot.com",
  messagingSenderId: "181438816646"
};
firebase.initializeApp(config);

class App extends Component {
  constructor(){
    super();
    this.state = {
      instances:[]
    };
  }

  componentDidMount(){
    axios.request({
      method:'get',
      url:'https://api.status.salesforce.com/v1/instances'
    }).then((response) => {
      this.setState({instances:response.data});
    });
  }

  render() {
    return (
      <div className="App">
        <Header instances={this.state.instances} />
        <Grid>
          <Row className="rowContainer">
            <Col xs={4} md={4} lg={4} className="LeftNavCol" data-simplebar data-simplebar-autohide="false">
              <LeftNav instances={this.state.instances}/>
            </Col>
            <Col xs={4} md={4} lg={4} className="middleCol">
              <UserInfo />
            </Col>
            <Col xs={4} md={4} lg={4} className="RightNavCol">
              <RightNav databaseForRightNav={this.state.instances}/>
            </Col>
        </Row>
        </Grid>
      </div>
    );
  }
}

export default App;
