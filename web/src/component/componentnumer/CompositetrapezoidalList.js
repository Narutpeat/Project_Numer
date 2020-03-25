import React, { Component } from "react";
import { Col ,Button } from "antd";
import Compositetrapezoidal from './../../Integration Techniques/Compositetrapezoidal'

class UserList extends Component {
  call = ()=>{
    var compositetrapezoidal = new Compositetrapezoidal()
    const { equation ,a ,b,n} = this.props
    compositetrapezoidal.add(equation ,a ,b,n)
  }
  render() {
    console.log('userlist : ',this.props);
    const { equation ,a ,b,n} = this.props;
    return (
      <div>
       <Col span={12} style={{marginTop : 20}}>
    <Button onClick={this.call}>equation={ equation} ,a={a} ,b={b } ,N={n} </Button>
    
          </Col>
      </div>
    );
  }
}
export default UserList;