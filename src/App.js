import React, { Component } from 'react';
import {Grid, Col, Row} from 'react-bootstrap';
import axios from 'axios';
import './App.css';
import Header from './Components/Header';
import LeftNav from './Components/LeftNav';
import RightNav from './Components/RightNav';

class App extends Component {
  constructor(){
    super();
    this.state = {
      instances:[],
      allInstances:[]
    }
  }

  componentWillMount(){
    this.getStatusSalesforceApi();
  }

  getStatusSalesforceApi(){
    axios.request({
      method:'get',
      url:'https://api.status.salesforce.com/v1/instances'
    }).then((response) => {
      this.setState({instances:response.data}, () => {
        console.log(this.state.instances);
      });
      var allInstances = response.data.map(function(instance){
          return instance.key;
      });
      this.setState({allInstances:allInstances}, () => {
      });
      }).catch((error) => {
        console.log(error);
      });
    }

  render() {
    return (
      <div className="App">
        <Header subscribe={this.state.instances} instances={this.state.allInstances} />
        <Grid>
          <Row>
            <Col xs={4} md={4} lg={4}>
              <LeftNav instances={this.state.instances}/>
            </Col>
            <Col xs={4} md={4} lg={4}>
              <div>Hey</div>
            </Col>
            <Col xs={4} md={4} lg={4}>
              <RightNav instances={this.state.instances}/>
            </Col>
        </Row>
        </Grid>
      </div>
    );
  }
}

export default App;
