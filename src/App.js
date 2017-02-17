import React, { Component } from 'react';
import {Grid, Col, Row} from 'react-bootstrap'
import axios from 'axios';
import './App.css';
import Header from './Components/Header'
import LeftNav from './Components/LeftNav'

class App extends Component {
  constructor(){
    super();
    this.state = {
      instances:[],
      fullName:''
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
        console.log(this.state);
      });
    }).catch((error) => {
      console.log(error);
    });
  }
  render() {
    return (
      <div className="App">
        <Header subscribe={this.state.instances} />
        <Grid>
          <Row>
            <Col xs={4} md={4} lg={4}>
              <LeftNav instances={this.state.instances}/>
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default App;
