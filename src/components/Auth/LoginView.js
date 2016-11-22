import React, { PropTypes } from 'react'
import Button from 'react-bootstrap/lib/Button'
import FormGroup from 'react-bootstrap/lib/FormGroup'
import ControlLabel from 'react-bootstrap/lib/ControlLabel'
import FormControl from 'react-bootstrap/lib/FormControl'
import HelpBlock from 'react-bootstrap/lib/HelpBlock'
import Form from 'react-bootstrap/lib/Form'
import Col from 'react-bootstrap/lib/Col'
import Checkbox from 'react-bootstrap/lib/Checkbox'
import ButtonGroup from 'react-bootstrap/lib/ButtonGroup'
import DropdownButton from 'react-bootstrap/lib/DropdownButton'
import MenuItem from 'react-bootstrap/lib/MenuItem'

const Email = React.createClass({
		  propTypes: {

 	  },
  render () {

    return (
    	    <FormGroup controlId="formHorizontalEmail">
      <Col componentClass={ControlLabel} sm={2}>
        Email
      </Col>
      <Col sm={10}>
        <FormControl type="email" placeholder="Email" />
      </Col>
    </FormGroup>

	)
}
});

const Passwd = React.createClass({
		  propTypes: {

 	  },
  render () {

    return (
    	    <FormGroup controlId="formHorizontalPassword">
      <Col componentClass={ControlLabel} sm={2}>
        Password
      </Col>
      <Col sm={10}>
        <FormControl type="password" placeholder="Password" />
      </Col>
    </FormGroup>
	)
}
});


const CheckB = React.createClass({
		  propTypes: {

 	  },
  render () {

    return (
   	  <FormGroup>
      <Col smOffset={2} sm={10}>
        <Checkbox>Remember me</Checkbox>
      </Col>
    </FormGroup>
	)
}
});

const SubmitBtn = React.createClass({
		  propTypes: {

 	  },
  render () {

    return (
    	    <FormGroup>
      <Col smOffset={2} sm={10}>
        <Button type="submit">
          Sign in
        </Button>
      </Col>
    </FormGroup>
	)
}
});

const Role = React.createClass({
		  propTypes: {

 	  },
  render () {

    return (
	       <FormGroup>
         <Col smOffset={2} sm={10}>
   <DropdownButton title="Role" id="bg-vertical-dropdown-1">
      <MenuItem eventKey="1">Requester</MenuItem>
      <MenuItem eventKey="2">Worker</MenuItem>
    </DropdownButton>
          </Col>
	</FormGroup>
	)
}
});

const LoginView = React.createClass({
	  propTypes: {

 	  },
  render () {

    return (

  <Form>
  	<Email />
  	<Passwd />
    <CheckB />
    <Role />
    <SubmitBtn />
  </Form>
    )
  }
})

export default LoginView
