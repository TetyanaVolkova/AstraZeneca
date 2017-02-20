import React, { Component } from 'react';
var uuid = require('uuid');
var firebase = require('firebase');
import {Grid, Col, Row, Panel, ListGroup, ListGroupItem} from 'react-bootstrap'
import '../App.css';


class RightNav extends Component {

    constructor(props){
      super(props);
      this.state = {
        id:uuid.v1(),
        name:'',
        email:'',
        instance:[],
        database: []
      }
    }

    getStatusFirebase(){

        var arr = [];
      firebase.database().ref('forms/').on('child_added', function(snapshot) {
        arr.push(snapshot.val());
        })
        this.setState({database:arr}, function() {
          console.log(this.state);
        });
    }

    componentWillMount(){
      this.getStatusFirebase();
    }

  render() {
    let database;
    if(this.state.database){
      database = this.state.database.map(function(data, id) {
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
        <h3>All Subscribers</h3>
        {database}
      </div>
    );
  }
}

export default RightNav;
