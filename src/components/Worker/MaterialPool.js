import React from 'react';
import {Panel, Button, Thumbnail, Grid, Row, Col} from 'react-bootstrap';

const Media = React.createClass({render(){
        return(
            <Grid>
                <Row>
                    <Col xs={6} md={3}>
                        <Thumbnail href="#" alt="160x160" src="/public/images/1.jpeg" />
                    </Col>
                    <Col xs={6} md={3}>
                        <Thumbnail href="#" alt="160x160" src="/public/images/2.jpeg" />
                    </Col>
                    {/*<Col xs={6} md={3}>*/}
                    {/*<Thumbnail href="#" alt="171x180" src="/assets/thumbnail.png" />*/}
                    {/*</Col>*/}
                </Row>
            </Grid>
        )
    }
});

export default class MaterialPool extends React.Component {
    constructor(...args) {
        super(...args);
        this.state = {
            open: true
        };
    }
    render() {
        return (
            <div>
                <Button onClick={ ()=> this.setState({ open: !this.state.open })}>
                    Material
                </Button>
                <Panel collapsible expanded={this.state.open}>
                    <Media/>
                </Panel>
            </div>
        );
    }
}
