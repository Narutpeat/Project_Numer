import React, { Component } from "react";
import { Col ,Button } from "antd";
import Forward1 from './../../Numerical Differentiation/Forward1'

class UserList extends Component {
  call = ()=>{
    var forward1 = new Forward1()
    const { equation ,x ,h,d} = this.props
    forward1.add(equation ,x ,h,d)
  }
  render() {
    console.log('userlist : ',this.props);
    const { equation ,x,h,d} = this.props;
    return (
      <div>
       <Col span={12} style={{marginTop : 20}}>
    <Button onClick={this.call}>equation={ equation} ,x={x} ,h={h } ,derivative={d} </Button>
            
          </Col>
      </div>
    );
  }
}
export default UserList;