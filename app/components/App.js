import React from 'react';
import ReactDom from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import * as Colors from 'material-ui/styles/colors';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import SignupForm from './SignupForm';

const muiTheme = getMuiTheme({});

export default class App extends React.Component {
  render() {
    return(
      <div>
        <MuiThemeProvider muiTheme={muiTheme}>
          <div className='container1'>
            <SignupForm />
          </div>
        </MuiThemeProvider>
      </div>
   );
  }
}
