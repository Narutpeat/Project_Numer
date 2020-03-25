import React, { Component } from "react";
import { Col ,Button } from "antd";
import Onepoint from './../../Roots of equations/One'

class UserList extends Component {
  call = ()=>{
    var one = new Onepoint()
    const { equation ,x} = this.props
    one.add(equation ,x)
  }
  render() {
    console.log('userlist : ',this.props);
    const { equation ,x } = this.props;
    return (
      <div>
       <Col span={12} style={{marginTop : 20}}>
    <Button onClick={this.call}>equation={ equation} , x={x} </Button>
            
          </Col>
      </div>
    );
  }
}
export default UserList;