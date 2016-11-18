import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TextField from 'material-ui/TextField';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { AppRegistry, TextInput } from 'react-native';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import FlatButton from 'material-ui/FlatButton';
import FacebookLogin from 'react-facebook-login';


class App extends Component {
    constructor(props) {
    super(props);
    this.state = {value: ' ' , Pass: ' '};
    this.handleChange = this.handleChange.bind(this);
    this.eraseAll     = this.eraseAll.bind(this);
    this.defaultString= this.defaultString.bind(this);
    this.responseFacebook= this.responseFacebook.bind(this);

  }
  handleChange(event) {
    this.setState({value: event.target.value});
    console.log(this.state.value);
  }
  eraseAll(event){
    this.setState({value: ''});
  }
  defaultString(event){
    this.setState({value: 'Username'});
  }

  responseFacebook(response) {
    console.log(response);
  }

  render() {
    return (
      <div className="App">
 
      
      <MuiThemeProvider muiTheme={getMuiTheme()}>
      <div >
    <TextField
      hintText="Type..."
      floatingLabelText="Username"
      value = {this.state.value}
      onChange={this.handleChange}
      onFocus={this.eraseAll}
      id="email"
    />
    <br />
    <br />
    <TextField
      hintText="Type..."
      floatingLabelText="Password"
      type="password"
      id="pswd"
    />
    <br />
    <br />

    <div>

    <FlatButton label="Login" primary={true} disabled={false}  id="loginButton" />
    <FlatButton label="Create account" secondary={true}  id="createButton" />
    <FlatButton label="Log Out" disabled={false} id="logoutButton" />

  </div>

    </div>
  </MuiThemeProvider>

  </div>
    );
  }
}

export default App;