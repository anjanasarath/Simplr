import React from 'react';
import ReactDom from 'react-dom';
import AppBar from 'material-ui/AppBar';
import Logo from './n-36.jpg';

export default class Bar extends React.Component {
  render(){
    return(
      <div style={{width: "100%"}}>
        <img src={Logo}></img>
      </div>
    );
  }
}
