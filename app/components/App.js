import React from 'react';
import ReactDom from 'react-dom';
import TextBox from './components/Text';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from './AppBar';

export default class App extends React.Component {
  render() {
    return(
      <MuiThemeProvider>
        <div>
          <AppBar/>
          <TextBox/>
        </div>
      </MuiThemeProvider>
   );
  }
}
