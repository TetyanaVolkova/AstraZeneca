import React, { Component } from 'react';
import {Navbar, Form} from 'react-bootstrap';
var uuid = require('uuid');
var firebase = require('firebase');
import '../App.css';

var config = {
  apiKey: "AIzaSyCDbP7ky35rLj3gYxJFGeSNbJ_qbaBXoUQ",
  authDomain: "survey-f70d5.firebaseapp.com",
  databaseURL: "https://survey-f70d5.firebaseio.com",
  storageBucket: "survey-f70d5.appspot.com",
  messagingSenderId: "181438816646"
};
firebase.initializeApp(config);

class Header extends Component {
  constructor(props){
    super(props);
    this.state = {
      id:uuid.v1(),
      name:'',
      email:'',
      instance:'',
      submitted: false
    }
  }

  handleNameChange(event){
    if (this.refs.name.value || this.refs.email.value || this.refs.instance.value)
      var name = this.refs.name.value;
      this.setState({name:name});
      var email = this.refs.email.value;
      this.setState({email:email});
      var instance = this.refs.instance.value;
      this.setState({instance:instance});
  }

  handleFormSubmit(event){
console.log(this.state);
    firebase.database().ref('forms/'+this.state.id).set({
      name: this.state.name,
      email: this.state.email,
      instance: this.state.instance
    });

    this.setState({submitted:true});
    event.preventDefault();
  }

  render() {
    let form;
    let status;
    if (this.state.submitted) {
      status = 'Welcome ';
      form = <div>{this.state.name + ' you subscribed for instance ' + this.state.instance}</div>
    } else {
      status = 'Subscribe: ';
      form = <Form onSubmit={this.handleFormSubmit.bind(this)}>
          <lable>Name:</lable>
            <input type="text" ref='name' placeholder="Enter Name..." onChange={this.handleNameChange.bind(this)} />
          <lable>Email:</lable>
            <input type="email" ref='email' placeholder="Enter Email..." onChange={this.handleNameChange.bind(this)} />
          <lable>Instance:</lable>
            <input type="text" ref='instance' placeholder="Enter Instance..." onChange={this.handleNameChange.bind(this)} />
          <input type="submit" value="Submit" />
        </Form>
    }
    return (
            <Navbar>
              <Navbar.Header>
                <Navbar.Brand>
                  <h1>{status} </h1>
                </Navbar.Brand>
              </Navbar.Header>
                  {form}
            </Navbar>
    );
  }
}


export default Header;
