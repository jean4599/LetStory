import React, { PropTypes } from 'react'

var Tabs = require("react-bootstrap/lib/Tabs");
var Tab = require("react-bootstrap/lib/Tab");

import MyLoginView from './LoginView'
import MyRegisterView from './RegisterView'


const TabsView = React.createClass({
  getInitialState() {
    return {
      key: 1
    };
  },

  handleSelect(key) {
    this.setState({key});
  },

  render() {
    return (
      <Tabs activeKey={this.state.key} onSelect={this.handleSelect} id="controlled-tab-example">
        <Tab eventKey={1} title="Login">
          <MyLoginView />
        </Tab>
        <Tab eventKey={2} title="Register">
          <MyRegisterView />
        </Tab>
      </Tabs>
    );
  }
});

export default TabsView
