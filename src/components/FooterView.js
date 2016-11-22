import React, { PropTypes } from 'react'

var Breadcrumb = require("react-bootstrap/lib/Breadcrumb");
var Row = require("react-bootstrap/lib/Row");

const MyFooterBar = React.createClass({
  render() {

    return (
      <Breadcrumb>
        <Breadcrumb.Item href="#">
          LetStory
        </Breadcrumb.Item>
        <Breadcrumb.Item href="http://getbootstrap.com/components/#breadcrumbs">
          Created in Fall 2016, at KAIST
        </Breadcrumb.Item>
        <Breadcrumb.Item active>
          Crowdsourced creative writing tool
        </Breadcrumb.Item>
      </Breadcrumb>
    )
  }

});

const FooterView = React.createClass({
  render () {
    return (
      <Row>
        <MyFooterBar />
      </Row>  
    )
  }
})

export default FooterView
