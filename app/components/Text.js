import React from 'react';
import ReactDom from 'react-dom';
import TextField from 'material-ui/TextField';
import { Header, Subheader } from 'react/material-ui';
import CheckBox from 'react/material-ui';
import connect from 'react-redux';

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
        <div styles= {{ position: "fixed", width: "100%" }}>
        <Header styles={{ title: "LET'S GET STARTED"}}
        <Subheader styles={{ text: "Business Name"  }}/>
          <div styles= {{position: "center", width: "40%", height: "40px"  }}>
            <TextField id='t1' value= { onChange = this.handleInput1  } />
          </div>
            <Subheader styles={{ text: "Business Email"  }}/>
          <div styles= {{position: "center", width: "40%" , height: "40px" }}>
            <TextField id='t2' value= {onChange = this.handleInput2 } />
            </div>
              <Subheader styles={{ text: "Create a Username"  }}/>
          <div styles= {{position: "center", width: "40%", height: "40px"}}>
            <TextField id='t3' value= {onChange = this.handleInput3 } />
          </div>
            <Subheader styles={{ text: "Password"  }}/>
          <div styles= {{position: "center", width: "40%", height: "40px" }}>
            <TextField id='t4' value= {onChange = this.handleInput4 } />
          </div>
            <Subheader styles={{ text: "Website"  }}/>
          <div styles= {{position: "center", width: "40%", height: "40px" }}>
            <TextField id='t5' value= {onChange = this.handleInput5 } />
          </div>
          <Subheader styles={{ text: "Type of Business"  }}/>
          <div styles= {{position: "center", width: "40%", height: "40px" }}>
            <TextField id='t6' value= {onChange = this.handleInput6 } />
          </div>
          <Subheader styles={{ text: "Terms of Service" }}/>
          <div>
          <CheckBox/>
          </div>
            <Subheader styles={{ text: "Privacy Policy" }}/>
            <div>
            <CheckBox/>
            </div>
      </div>


    );
  }
}

function mapStateToProps(state){
  if (state.red.value1){
    value1: val1
  }

if (state.red2.value2){
  value2: val2
}

if (state.red3.value3){
  value3: val3
}

if (state.red4.value4){
  value4: val4
}

if (state.red5.value5){
  value4: val5
}
if (state.red6.value5){
  value4: val5
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
