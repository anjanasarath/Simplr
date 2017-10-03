import React from 'react';
import ReactDom from 'react-dom';
import TextField from 'material-ui/TextField';
import Subheader from 'material-ui/Subheader';
import CheckBox from 'material-ui/Checkbox';
import RaisedButton from 'material-ui/RaisedButton';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import Paper from 'material-ui/Paper';
import { connect } from 'react-redux';
import Logo from '../simplr_img/n-36.jpg';
import { reduxForm } from 'redux-form';

const style1 = {
  margin: 120
};
const paperStyle = {
  height: 900,
  width: 700,
  margin: 10,
  textAlign: 'center',
  display: 'inline-block'
};
const subheaderStyle = {
  color: "grey",
  textAlign: "left",
  paddingLeft: "220px"
};
const textAlignCenter = {
  marginLeft: '30%',
  width: '100%'
};
const textAlignLeft = {
  textAlign: "left"
};
const getStartedStyle = {
  color: "#3498DB",
  fontSize:"20px"
}


const label1 = (<span>I have read and I do accept<a href=''> terms and services</a></span>);
const label2 = (<span>I have read and I do accept<a href=''> privacy policy</a></span>);

class SignupForm extends React.Component {
  constructor(props){
    super(props);

    this.state = {
        businessName: '',
        businessEmail: '',
        userName: '',
        password: '',
        website: '',
        typeOfBusiness: '',
        termsAndCondition: false,
        privacyPolicy: false,
        errors: {},
        openDialog: false,
    };

    this.handleInput1 = this.handleInput1.bind(this);
    this.handleInput2 = this.handleInput2.bind(this);
    this.handleInput3 = this.handleInput3.bind(this);
    this.handleInput4 = this.handleInput4.bind(this);
    this.handleInput5 = this.handleInput5.bind(this);
    this.handleInput6 = this.handleInput6.bind(this);
    this.handleInput7 = this.handleInput7.bind(this);
    this.handleInput8 = this.handleInput8.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.validatePassword = this.validatePassword.bind(this);
    this.validateEmail = this.validateEmail.bind(this);
    this.updatedState = this.updatedState.bind(this);
    this.openDialog = this.openDialog.bind(this);
    this.closeDialog = this.closeDialog.bind(this);
  }

  validateEmail(email) {
    const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const errorMessage = "Please provide a valid email address"

    var error = ""
    if (!email) {
        error = errorMessage
    } else if (!emailRegex.test(email)) {
        error = errorMessage
    }
    return {businessEmail : error};
  }

  validatePassword(password) {
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{6,}$/
    const errorMessage = "Password should have atleast six characters, 1 uppercase, 1 lowercase and 1 digit"

    var error = ""
    if (!password || password.length < 6) {
        error = errorMessage
    } else if(!passwordRegex.test(password)) {
      error = errorMessage
    }
    return {password: error};
  }

  updatedState(newValue, error) {
    let newErrors = Object.assign({}, this.state.errors, error)
    let newState = Object.assign({}, this.state, newValue, {errors: newErrors})

    return newState;
  }

  handleInput1(event) {
    this.setState({businessName: event.target.value});
  }

  handleInput2(event){
    var error = this.validateEmail(event.target.value)
    var newState = this.updatedState({businessEmail: event.target.value}, error)
    this.setState(newState);
  }

  handleInput3(event){
    this.setState({userName: event.target.value});
  }

  handleInput4(event){
    var error = this.validatePassword(event.target.value)
    var newState = this.updatedState({password: event.target.value}, error)
    this.setState(newState);
  }

  handleInput5(event){
    this.setState({website: event.target.value});
  }

  handleInput6(event){
    this.setState({typeOfBusiness: event.target.value});
  }

  handleInput7(event){
    this.setState({termsAndCondition: !this.state.termsAndCondition});
  }

  handleInput8(event){
    this.setState({privacyPolicy: !this.state.privacyPolicy});
  }

  handleSubmit(event){

  }

  openDialog(){
    var errors = this.state.errors
    if(!errors || !(errors.password || errors.businessEmail)) {
      if(this.state.privacyPolicy && this.state.termsAndCondition) {
        this.setState({openDialog: true})
      } else {
        alert("please accept privacy policy and terms and conditions")
      }
    }
  }

  closeDialog(){
      this.setState({openDialog: false})
  }

  render() {
    const {
        fields: {
          businessName,
          businessEmail,
          userName,
          password,
          website,
          typeOfBusiness,
          termsAndCondition,
          privacyPolicy
        },

    } = this.props;

    const actions = [
      <FlatButton
        label="Close"
        primary={true}
        onClick={this.closeDialog}
      />,
    ];

    return (
        <div>
          <form id='signupForm' onSubmit={(event) => this.handleSubmit(event)}>
            <Paper style={paperStyle} zDepth={5}>
              <div className="logo">
                <img src={Logo}></img>
              </div>
              <Subheader style={getStartedStyle}>LET&#39;S GET STARTED</Subheader>
              <div>
                <TextField id='t1'
                  hintText="Enter Business Name"
                  floatingLabelText="Business Name"
                  type="text"
                  {...businessName}
                  onChange = {this.handleInput1} />
              </div>

              <div>
                <TextField id='t2'
                  hintText="Enter Business Email"
                  floatingLabelText="Business Email"
                  type="text"
                  {...businessEmail}
                  errorText={this.state.errors.businessEmail
                      ? this.state.errors.businessEmail
                      : ''}
                  onChange = {this.handleInput2} />
                </div>

              <div>
                <TextField id='t3'
                  hintText="Enter Username"
                  floatingLabelText="Create a Username"
                  type="text"
                  {...userName}
                  onChange = {this.handleInput3} />
              </div>

              <div>
                <TextField id='t4'
                  hintText="Enter Password"
                  floatingLabelText={<span>Password<code>&nbsp;6characters|1uppercase|1lowercase|1digit</code></span>}
                  type="password"
                  {...password}
                  errorText={this.state.errors.password
                      ? this.state.errors.password
                      : ''}
                  onChange = {this.handleInput4 } />
              </div>

              <div>
                <TextField id='t5'
                  hintText="Enter Website"
                  floatingLabelText={<span>Website<code>(Optional)</code></span>}
                  type="text"
                  {...website}
                  onChange = {this.handleInput5}/>
              </div>

              <div>
                <TextField id='t6'
                  hintText="Enter Type of Business"
                  floatingLabelText="Type of Business"
                  type="text"
                  {...typeOfBusiness}
                  onChange = {this.handleInput6}/>
              </div>
              <Subheader style={subheaderStyle}>Terms of Service</Subheader>
              <div>
                <CheckBox
                  style={textAlignCenter}
                  labelStyle={textAlignLeft}
                  label={label1}
                  {...termsAndCondition}
                  onCheck={this.handleInput7}/>
              </div>
              <Subheader style={subheaderStyle}>Privacy Policy</Subheader>
              <div>
                <CheckBox
                  style={textAlignCenter}
                  labelStyle={textAlignLeft}
                  label={label2}
                  {...privacyPolicy}
                  onCheck={this.handleInput8}/>
              </div>
              <div>
                <RaisedButton label="REGISTER" primary={true} style={style1} onClick={this.openDialog} />
                <Dialog
                  title="Registration Completed"
                  actions={actions}
                  modal={false}
                  open={this.state.openDialog}
                  onRequestClose={this.closeDialog}
                >
                  Successfully registered!
                </Dialog>
              </div>
            </Paper>
          </form>
        </div>
    );
  }
}

function mapStateToProps(state) {
  return {};
}

export default reduxForm({
    form: 'signupForm',
    fields: [
      'businessName',
      'businessEmail',
      'userName',
      'password',
      'website',
      'typeOfBusiness',
      'termsAndCondition',
      'privacyPolicy',
    ],
  },
  mapStateToProps, {})(SignupForm);
