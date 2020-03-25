import React, { Component } from "react";
import { Col ,Button } from "antd";
import Central2 from './../../Numerical Differentiation/Central2'

class UserList extends Component {
  call = ()=>{
    var central2 = new Central2()
    const { equation ,x ,h,d} = this.props
    central2.add(equation ,x ,h,d)
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