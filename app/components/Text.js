import React from 'react';
import ReactDom from 'react-dom';
import TextField from 'material-ui/TextField';
import Subheader from 'material-ui/Subheader';
import CheckBox from 'material-ui/Checkbox';
import RaisedButton from 'material-ui/RaisedButton';
import { connect } from 'react-redux';
import Logo from './n-36.jpg';

const style1 = {
  margin: 120

};


 class TextBox extends React.Component {

constructor (props){
  super(props);
  this.handleInput1 = this.handleInput1.bind(this);
  this.handleInput2 = this.handleInput2.bind(this);
  this.handleInput3 = this.handleInput3.bind(this);
  this.handleInput4 = this.handleInput4.bind(this);
  this.handleInput5 = this.handleInput5.bind(this);
  this.handleInput6 = this.handleInput6.bind(this);

}


handleInput1(event){
  this.setState({
    type: "handleInput1",
    value: event.target.value1
  })
}

handleInput2(event){
  this.setState({
    type: "handleInput2",
    value: event.target.value2
  })
}

handleInput3(event){
  this.setState({
    type: "handleInput3",
    value: event.target.value3
  })
}

handleInput4(event){
  this.setState({
    type: "handleInput4",
    value: event.target.value4
  })
}

handleInput5(event){
  this.setState({
    type: "handleInput5",
    value: event.target.value5
  })
}

handleInput6(event){
  this.setState({
    type: "handleInput6",
    value: event.target.value6
  })
}

  render(){
    return (
        <div>
          <div className="logo">
            <img src={Logo}></img>
            </div>
          <Subheader style={{ color: "#3498DB", fontSize:"20px"}}>LET&#39;S GET STARTED</Subheader>
          <div >
            <TextField id='t1'   hintText="Enter Business Name" floatingLabelText="Business Name" type="text" onChange = {this.handleInput1} />
          </div>

          <div>
            <TextField id='t2' hintText="Hint Text" errorText="Please enter a valid email address" hintText="Enter Business Email" floatingLabelText="Business Email" type="text" onChange = {this.handleInput2} />
            </div>

          <div>
            <TextField id='t3' hintText="Enter Username" floatingLabelText="Create a Username" type="text"onChange = {this.handleInput3} />
          </div>

          <div>
            <TextField id='t4'  hintText="Hint Text" errorText="Password should have six characters" hintText="Enter Password" floatingLabelText={<span>Password<code>6characters|1uppercase|1lowercase|1digit</code></span>}  type="password"onChange = {this.handleInput4 } />
          </div>

          <div>
            <TextField id='t5' hintText="Enter Website" floatingLabelText={<span>Website<code>(Optional)</code></span>} type="text"onChange = {this.handleInput5}/>
          </div>

          <div>
            <TextField id='t6' hintText="Enter Type of Business" floatingLabelText="Type of Business" type="text"onChange = {this.handleInput6}/>
          </div>
          <Subheader style={{ color: "grey"}}>Terms of Service</Subheader>
          <div>
          <CheckBox style={{ color: "light grey"}} label={<span>I have read and I do accept<a href=''> terms and services</a></span>}/>
          </div>
          <Subheader style={{ color: "grey"}}>Privacy Policy</Subheader>
            <div>
            <CheckBox style={{ color: "light grey"}} label={<span>I have read and I do accept<a href=''> privacy policy</a></span>}/>
            </div>
            <div>
                <RaisedButton label="REGISTER" primary={true} style={style1} />
            </div>
      </div>


    );
  }
}

function mapStateToProps(state){
  if (state.reducer1){
    value1: newState
  }

if (state.reducer1){
  value2: newState
}

if (state.reducer1){
  value3: newState
}

if (state.reducer1){
  value4: newState
}

if (state.reducer1){
  value4: newState
}
if (state.reducer1){
  value4: newState
}

else return {
  value1 :"",
    value2 :"",
      value3 :"",
        value4 :"",
          value5 :"",
            value6 :""
}
}
export default connect(mapStateToProps)(TextBox);
