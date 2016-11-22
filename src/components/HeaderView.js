import React, { PropTypes } from 'react'
import { Router, Route, IndexRoute, Link, browserHistory, hashHistory } from 'react-router'
import { LinkContainer } from 'react-router-bootstrap';

var Navbar = require("react-bootstrap/lib/Navbar");
var NavItem = require("react-bootstrap/lib/NavItem");
var Nav = require("react-bootstrap/lib/Nav");


const MyNavBar = React.createClass({
  render() {
    return(
        <Navbar>
          <Navbar.Header>
            <Navbar.Brand>
              <Link to="/">LetStory</Link>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav>
              <LinkContainer to="/requester">
                <NavItem eventKey={1}>Requester</NavItem>
              </LinkContainer>
              <LinkContainer to="/worker">
                <NavItem eventKey={2}>Worker</NavItem>
              </LinkContainer>
              <LinkContainer to="/auth">
                <NavItem eventKey={3}>Auth</NavItem>
              </LinkContainer>
            </Nav>
          </Navbar.Collapse>
        </Navbar>

        )
  }
});


const HeaderView = React.createClass({
  render () {
    return (
      <div>

        <MyNavBar />

      </div>
    )
  }
});

export default HeaderView
