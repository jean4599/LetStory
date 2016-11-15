import React from 'react';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {amber100, amber500, amber700} from 'material-ui/styles/colors';
import Appbar from 'material-ui/AppBar';



const muiTheme = getMuiTheme({
  palette: {
    primary1Color: amber500,
    primary2Color: amber700,
    primary3Color: amber100,
  },
  }, {
  avatar: {
    borderColor: null,
  },
  //userAgent: req.headers['user-agent']
});

const MainC = () => (
  <MuiThemeProvider muiTheme={muiTheme}>
      <Appbar
        title="LetStory"
        iconClassNameRight="muidocs-icon-navigation-expand-more"
      />
  </MuiThemeProvider>
);

var Main = React.createClass({
  render: function () {
    return (
    <MainC />
    );
  }
});


module.exports = Main;

//export default Main;
