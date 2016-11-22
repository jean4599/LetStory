import React, { PropTypes } from 'react';
import {Grid, Row, Col} from 'react-bootstrap';
import UserProfile from './Worker/UserProfile';
import ListNav from './Worker/ListNav';
import WorksList from './Worker/WorksList';

const Layout = React.createClass({
  render(){
    return(
      <Grid>

        <Row>
          <Col xs={6} md={2}> <UserProfile/> </Col>
          <Col xs={6} md={10}>
            <Row>
              <Col xs={6} md={12}><ListNav/> </Col>
              <Col xs={6} md={12}><WorksList/> </Col>
            </Row>

          </Col>
        </Row>
      </Grid>
    )
  }
});
const WorkerView = React.createClass({
  render () {
    return (
      <div>
        <Layout/>
      </div>
    )
  }
});

export default WorkerView
