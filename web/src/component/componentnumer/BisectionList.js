import React, { Component } from "react";
import { Col ,Button } from "antd";
import Bisection from './../../Roots of equations/Bisection'

class UserList extends Component {
  call = ()=>{
    var bisection = new Bisection()
    const { equation ,xl ,xr} = this.props
    bisection.add(equation ,xl ,xr)
  }
  render() {
    console.log('userlist : ',this.props);
    const { equation ,xl ,xr} = this.props;
    return (
      <div>
       <Col span={12} style={{marginTop : 20}}>
    <Button onClick={this.call}>equation={ equation} ,xl={xl} ,xr={xr } </Button>
            
          </Col>
      </div>
    );
  }
}
export default UserList;