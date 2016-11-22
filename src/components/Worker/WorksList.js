import React from 'react';
import {ListGroup, ListGroupItem} from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap'

function storyUrl(id) {
    return '/worker/story/'+id+'/#';
}

const WorksList = React.createClass({
    render(){
        return(
            <ListGroup>
                <LinkContainer to={storyUrl(1)}>
                    <ListGroupItem header="Story 1">Some body text</ListGroupItem>
                </LinkContainer>
                <LinkContainer to={storyUrl(2)}>
                    <ListGroupItem header="Story 2">Some body text</ListGroupItem>
                </LinkContainer>
                <LinkContainer to={storyUrl(3)}>
                    <ListGroupItem header="Story 3">Some body text</ListGroupItem>
                </LinkContainer>
            </ListGroup>
        )
    }
});
export default WorksList;

