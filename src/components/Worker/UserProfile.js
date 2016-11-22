import React from 'react';
import {Image, ListGroup, ListGroupItem} from 'react-bootstrap';

const imageStyle = {
    width: "60px"
}

const broadcast1 = "100 workers are now working with you";
const broadcast2 = "798 workers have been working on LetStory this week!";
const browdcast3 = "Lets write more story and put your name on more works";

const ListgroupInstance = React.createClass({
    render(){
        return(
            <ListGroup>
                <ListGroupItem>
                    <div>
                        <Image src="/public/images/profile.png" circle style={imageStyle}/>
                        <p>Hi Miro</p>
                    </div>
                </ListGroupItem>
                <ListGroupItem>...</ListGroupItem>
                <ListGroupItem>
                    <p>{broadcast1}</p>
                    <p>{broadcast2}</p>
                    <p>{browdcast3}</p>
                </ListGroupItem>
            </ListGroup>
        );
    }
});

const Profile = React.createClass({
    render(){
        return(
            <ListgroupInstance/>
        );
    }
});

export default Profile;