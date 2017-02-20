import React, { Component } from 'react';
import {Grid, Col, Row, Panel, ListGroup, ListGroupItem} from 'react-bootstrap'
import '../App.css';

class LeftNav extends Component {
  render() {
    let allInstances;
    if(this.props.instances){
      allInstances = this.props.instances.map(function(instance, id) {
        let instanceId = id + 1;
        let title = 'INSTANCE # ' + instanceId;
        let environment = instance.environment;
        let key = instance.key;
        let releaseVersion = instance.releaseVersion;
        let isActive = instance.isActive.toString();
        let location = instance.location;
        let status = instance.status;
        return (
          <Panel key={id} header={title} eventKey={id}>
            <Grid>
                <Row>
                  <Col xs={3} md={3} lg={3}>
                    <ListGroup>
                      <ListGroupItem><strong>Environment: </strong> {environment}</ListGroupItem>
                      <ListGroupItem><strong>Is Active: </strong> {isActive}</ListGroupItem>
                      <ListGroupItem><strong>Key: </strong> {key}</ListGroupItem>
                      <ListGroupItem><strong>Location: </strong> {location}</ListGroupItem>
                      <ListGroupItem><strong>Release Version: </strong> {releaseVersion}</ListGroupItem>
                      <ListGroupItem><strong>Status: </strong> {status}</ListGroupItem>
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
        <h3>All Instances From Salesforce</h3>
        {allInstances}
      </div>
    );
  }
}

export default LeftNav;
