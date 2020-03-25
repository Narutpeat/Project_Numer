import React, { Component } from "react";
import { Col ,Button } from "antd";
import Secant from '../../Roots of equations/Secant'

class UserList extends Component {
  call = ()=>{
    var secant = new Secant()
    const { equation ,x0 ,x1} = this.props
    secant.add(equation ,x0 ,x1)
  }
  render() {
    console.log('userlist : ',this.props);
    const { equation ,x0 ,x1} = this.props;
    return (
      <div>
       <Col span={12} style={{marginTop : 20}}>
    <Button onClick={this.call}>equation={ equation} ,x0={x0} ,x1={x1 } </Button>
            
          </Col>
      </div>
    );
  }
}
export default UserList;