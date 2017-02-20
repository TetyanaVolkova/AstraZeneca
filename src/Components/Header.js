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
      instance:[],
      submitted: false,
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
    firebase.database().ref('forms/'+this.state.id).set({
      name: this.state.name,
      email: this.state.email,
      instance: this.state.instance
    });
    this.setState({submitted:true});
    event.preventDefault();
  }

  handleNewSubscription(event){
    this.setState({submitted:false}, function() {
    });
    event.preventDefault();
  }

  render() {
    let form;
    let options = this.props.instances.map(function(instance){
      return <option key={instance} value={instance}>{instance}</option>
    });
    if (!this.state.submitted) {
      form = <Form onSubmit={this.handleFormSubmit.bind(this)}>
        <h1>Subscribe:
          <lable> Name</lable>
            <input type="text" ref='name' placeholder="Enter Name..." onChange={this.handleNameChange.bind(this)} />
          <lable>Email</lable>
            <input type="email" ref='email' placeholder="Enter Email..." onChange={this.handleNameChange.bind(this)} />
          <lable>Instance</lable>
            <select ref='instance' name="options[]" multiple="multiple" size="5" onChange={this.handleNameChange.bind(this)} >
             {options}
            </select>
          <input type="submit" value="Subscribe" />
        </h1>
        </Form>
    } else if (this.state.submitted){
      form = <Form className="newSubscription" onSubmit={this.handleNewSubscription.bind(this)}>
        <h2>Welcome {this.state.name}<span>, you subscribed for the instance </span> {this.state.instance}<span>, your email is  </span>{this.state.email}</h2>
        <input type="submit" value="New Subscription" />
        </Form>
    } else {
      form = <Form onSubmit={this.handleFormSubmit.bind(this)}>
        <h1>Subscribe:
          <lable> Name</lable>
            <input type="text" ref='name' placeholder="Enter Name..." onChange={this.handleNameChange.bind(this)} />
          <lable>Email</lable>
            <input type="email" ref='email' placeholder="Enter Email..." onChange={this.handleNameChange.bind(this)} />
          <lable>Instance</lable>
            <select ref='instance' name="options[]" multiple="multiple" size="5" onChange={this.handleNameChange.bind(this)} >
             {options}
            </select>
          <input type="submit" value="Subscribe" />
        </h1>
        </Form>
    }
    return (
            <Navbar>
                  <h1><a href="https://api.status.salesforce.com/v1/instances" target="blink"> Salesforce Instances </a></h1>
                  {form}
            </Navbar>
    );
  }
}


export default Header;
