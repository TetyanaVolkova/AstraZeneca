import React, { Component } from 'react';
import axios from 'axios';
import {Grid, Col, Row, Panel, ListGroup, ListGroupItem} from 'react-bootstrap'
import '../App.css';

class UserInfo extends Component {
  constructor(){
    super();
    this.state = {
      instances:[]
    };
  }

  // componentDidMount(){
  //   axios.request({
  //     method:'get',
  //     url:'https://api.status.salesforce.com/v1/subscribe'
  //   }).then((response) => {
  //     this.setState({instances:response.data});
  //     console.log(response.data);
  //   });
  // }
  //
  render() {
  //   let numberOfAlerts = this.props.alerts.length;
  //   let title = <h3>Alerts {numberOfAlerts}</h3>
  //   let alerts;
  //   if(this.props.alerts.length > 0){
  //       alerts = this.props.alerts.map(function(alert, id) {
  //       let alertid = id + 1;
  //       let title = 'Alert # ' + alertid;
  //       let name = alert.name;
  //       let email = alert.email;
  //       let instance = alert.instance;
  //       return (
  //         <Panel key={id} header={title} eventKey={id}>
  //           <Grid>
  //               <Row>
  //                 <Col xs={3} md={3} lg={3}>
  //                   <ListGroup>
  //                     <ListGroupItem><strong>Name: </strong> {name}</ListGroupItem>
  //                     <ListGroupItem><strong>Email: </strong> {email}</ListGroupItem>
  //                     <ListGroupItem><strong>Instance: </strong> {instance}</ListGroupItem>
  //                   </ListGroup>
  //                 </Col>
  //               </Row>
  //             </Grid>
  //           </Panel>
  //       )
  //     });
  //   }
    return (
      <div className="leftNavContainer">
        Alerts
      </div>
    );
  }
}

export default UserInfo;
