import React from 'react';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {amber100, amber500, amber700} from 'material-ui/styles/colors';

import MainView from './MainView';
import LoginView from './LoginView';
import RequesterView from './RequesterView';
import WorkerView from './WorkerView';
import HeaderView from './HeaderView';

var components = {
  'MainView' : MainView,
  'LoginView' : LoginView,
  'WorkerView' : WorkerView,
  'RequesterView' : RequesterView

};

class Footer extends React.Component{
  render()
  {
    return (<div>Footer</div>)
  }
}


class T extends React.Component{
  constructor(props)
  {
    super(props);
  }
  render() {
    var El = components[this.props.body];

    return (
        <html>
          <head>
            <title>{this.props.title}</title>
          </head>
          <body>
              <HeaderView />
              <El />
              <Footer />
          </body>
        </html>
    );
  }
}

module.exports = T;
