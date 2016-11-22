import React, { PropTypes } from 'react'
import HeaderView from './HeaderView'
import FooterView from './FooterView'

var Grid = require("react-bootstrap/lib/Grid");
var Row = require("react-bootstrap/lib/Row");


const T = React.createClass({
  render () {
    return (
      <div>
        <HeaderView />
        <Grid>
          <Row>
            {this.props.children}
          </Row>

          <FooterView />
        </Grid>
      </div>
    )
  }
})

export default T
