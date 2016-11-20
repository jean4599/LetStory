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
});

const HeaderView = () => (
  <MuiThemeProvider muiTheme={muiTheme}>
    <div>
      <Appbar
          title="LetStory"
          iconClassNameRight="muidocs-icon-navigation-expand-more"
      />
    </div>

  </MuiThemeProvider>
);

module.exports = HeaderView; //export default Main;
