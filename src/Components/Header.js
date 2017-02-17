import React, { Component } from 'react';
import {Navbar, Nav, FormGroup, FormControl, ControlLabel} from 'react-bootstrap';
import '../App.css';

class Header extends Component {
  render() {
    let subscribe;
    if(this.props.subscribe){
      subscribe = this.props.subscribe.map(function(sub, id) {
        let key = sub.key;
        return (
                <option key={key} value="select">{key}</option>
        )
      });
    }
    return (
      <Navbar>
        <Navbar.Header>
          <Navbar.Brand>
            <h1>Subscribe: </h1>
          </Navbar.Brand>
        </Navbar.Header>
          <Nav>
          <FormGroup controlId="formControlsSelectMultiple">
            <ControlLabel>Subscribe For Instances: </ControlLabel>
            <FormControl componentClass="select" multiple>
              {subscribe}
            </FormControl>
          </FormGroup>
          </Nav>
      </Navbar>
    );
  }
}

export default Header;
