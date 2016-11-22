import React, { PropTypes } from 'react';
import {NavItem, Nav, MenuItem, NavDropdown} from 'react-bootstrap';

const ListNav = React.createClass({
    handleSelect(eventKey) {
        event.preventDefault();
        alert(`selected ${eventKey}`);
    },

    render(){
        return (
            <Nav bsStyle="tabs" activeKey="1">
                <NavItem eventKey="1" href="">Newest</NavItem>
                <NavItem eventKey="2" href="">Popular</NavItem>
                <NavItem eventKey="3" href="">Finished</NavItem>
                <NavDropdown eventKey="4" title="My favorite" id="nav-dropdown">
                    <MenuItem eventKey="4.1">Story 1</MenuItem>
                    <MenuItem eventKey="4.2">Story 2</MenuItem>
                    <MenuItem eventKey="4.3">Story 3</MenuItem>
                    <MenuItem divider />
                    <MenuItem eventKey="4.4">All My History</MenuItem>
                </NavDropdown>
            </Nav>
        );
    }
});

export default ListNav;