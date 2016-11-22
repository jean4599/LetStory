import React, { PropTypes } from 'react';
import {Grid, Row, Col, Button, ButtonToolbar} from 'react-bootstrap';
import MaterialPool from './MaterialPool';
import StoryPool from './StoryPool';

const sometext="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec hendrerit tempor tellus. Donec pretium posuere tellus. Proin quam nisl, tincidunt et, mattis eget, convallis nec, purus.";

const StoryTitle = React.createClass({
    render(){
        return(
            <h3>{this.props.title}</h3>
        )
    }
});
const StoryStatus = React.createClass({
    render(){

        return(
            <h3>{this.props.title}</h3>
        )
    }
});

const Left = React.createClass({
    render(){
        return(
            <div>
                <Row className="show-grid">
                    <Col md={12}><StoryTitle title="Abondaned Dogs"/></Col>
                </Row>
                <Row className="show-grid">
                    <Col md={12}><p>{sometext}</p></Col>
                </Row>
            </div>
        )
    }
});
const Right = React.createClass({
    render(){
        return(
            <div>
                <Row className="show-grid">
                    <Col xsOffset={6} md={6}>
                        <ButtonToolbar>
                            <Button bsStyle="primary">Go back to story list</Button>
                            <Button bsStyle="primary">Review the story</Button>
                        </ButtonToolbar>
                    </Col>
                    <Col md={12}>
                        <MaterialPool/>
                        <StoryPool/>
                    </Col>

                </Row>
            </div>
        )
    }
});
const Container = React.createClass({
    render(){
        return(
            <Grid>
                <Row className="show-grid">
                    <Col xs={2} md={4}><Left/></Col>
                    <Col xs={16} md={8}><Right/></Col>
                </Row>
            </Grid>
        )
    }
});

const WorkerStoryView = React.createClass({
    render () {
        return (
            <div>
                <Container/>
            </div>
        )
    }
});

export default WorkerStoryView
