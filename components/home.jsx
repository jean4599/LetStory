import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import Appbar from 'material-ui/AppBar';
import * as mui from 'material-ui';
const AppbarStyles = getMuiTheme({
    palette: {
      accent1Color: "#333",
    }
});

var Home = React.createClass({
  render: function () {
    return (
    <Appbar
      title="Title"
      iconClassNameRight="muidocs-icon-navigation-expand-more"
    />
    );
  }
});


module.exports = Home;
