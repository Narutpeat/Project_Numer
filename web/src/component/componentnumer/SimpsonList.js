import React, { Component } from "react";
import { Col ,Button } from "antd";
import Simpson from './../../Integration Techniques/Simpson'

class UserList extends Component {
  call = ()=>{
    var simpson = new Simpson()
    const { equation ,a ,b} = this.props
    simpson.add(equation ,a ,b)
  }
  render() {
    console.log('userlist : ',this.props);
    const { equation ,a ,b} = this.props;
    return (
      <div>
       <Col span={12} style={{marginTop : 20}}>
    <Button onClick={this.call}>equation={ equation} ,a={a} ,b={b } </Button>
            
          </Col>
      </div>
    );
  }
}
export default UserList;