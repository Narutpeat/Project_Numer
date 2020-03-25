import React, { Component } from "react";
import { Col ,Button } from "antd";
import Cramer from './../../System Of Linear Equations/Cramer'

class UserList extends Component {
  call = ()=>{
    var cramer = new Cramer()
    const { equation} = this.props
    cramer.add(equation)
  }
  show = () =>{
    const { equation} = this.props
    var a=Object.values(equation)
    var string=[]
    for(var i=0;i<a.length;i++){
      var r=[]
      for(var j=0;j<a.length;j++){
        string.push(a[i][j])
        string.push('\xa0')
      }
      string.push('\xa0\xa0')
      string.push(a[i][j])
      string.push(<br/>)
    }
    return string
  }
  render() {
    console.log('userlist : ',this.props);
    const { equation} = this.props;
    return (
      <div>
       <Col span={12} style={{marginTop : 20},{width:50},{height:50}}>
       <button type="button" class="btn btn-primary"onClick={this.call}>{ this.show()} </button>
      </Col>
      <br></br> 
      <br></br> 
      </div>
    );
  }
}
export default UserList;