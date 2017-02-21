import React, { Component } from 'react';
var firebase = require('firebase');
import {Grid, Col, Row, Panel, ListGroup, ListGroupItem} from 'react-bootstrap'
import '../App.css';


class RightNav extends Component {

  constructor(props){
    super(props);
    this.state = {
      name:'',
      email:'',
      subscribers: [],
    }
  }

  componentDidMount() {
    var self = this;
    firebase.database().ref('forms/').once('value').then(function(snapshot) {
      var arr = [];
      var data = snapshot.val();
      console.log(data);
      if (data) {
        for(var item in data){
          if (data.hasOwnProperty(item)) {
            arr.push(data[item]);
          }
        }
      }
      self.setState({subscribers: arr});
    });
  }

  render() {
    let dataBase;
    let title;
    let numberOfAllSubscribers = this.state.subscribers.length;
    title = <h3>All Subscribers <button className="numberButton">{numberOfAllSubscribers}</button></h3>
    if(this.state.subscribers.length > 0){
      dataBase = this.state.subscribers.map(function(data, id) {
        let dataid = id + 1;
        let title = 'SUBSCRIBER # ' + dataid;
        let name = data.name;
        let email = data.email;
        let instance = data.instance;
        return (
          <Panel key={id} header={title} eventKey={id}>
            <Grid>
                <Row>
                  <Col xs={3} md={3} lg={3}>
                    <ListGroup>
                      <ListGroupItem><strong>Name: </strong> {name}</ListGroupItem>
                      <ListGroupItem><strong>Email: </strong> {email}</ListGroupItem>
                      <ListGroupItem><strong>Instance: </strong> {instance}</ListGroupItem>
                    </ListGroup>
                  </Col>
                </Row>
              </Grid>
            </Panel>
        )
      });
    }
    return (
      <div className="leftNavContainer">
        {title}
        {dataBase}
      </div>
    );
  }
}

export default RightNav;
