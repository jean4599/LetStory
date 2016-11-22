import React from 'react';
import {ListGroup, ListGroupItem, Grid, Row, Col, Label, FormGroup} from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap'

function storyUrl(id) {
    return '/worker/story/'+id+'/#';
}
const LabelGroup = React.createClass({
    render(){
        return(
            <p placement="right">
                <Label bsStyle="default">Collecting</Label>
                <Label bsStyle="success">Highlighting</Label>
                <Label bsStyle="success">Writing</Label>
            </p>
        )
    }
});
const StoryOverView = React.createClass({
    render(){
        return(
            <Row className="list-group-item">
                <h4>Story</h4>
                    <p>this is story 1</p>
                    <LabelGroup/>
            </Row>
        )
    }
})
const WorksList = React.createClass({
    render(){
        return(
            <ListGroup>
                <LinkContainer to={storyUrl(1)}>
                    <ListGroupItem  header="Abandoned dogs">
                        <p>this is story about abandoned dogs</p>
                        <LabelGroup/>
                    </ListGroupItem >
                </LinkContainer>
                <LinkContainer to={storyUrl(2)}>
                    <ListGroupItem  header="Story 2">
                        <p>this is story 2</p>
                        <LabelGroup/>
                    </ListGroupItem >
                </LinkContainer>
                <LinkContainer to={storyUrl(3)}>
                    <ListGroupItem  header="Story 3">
                        <p>this is story 3</p>
                        <LabelGroup/>
                    </ListGroupItem >
                </LinkContainer>
            </ListGroup>
        )
    }
});
export default WorksList;

