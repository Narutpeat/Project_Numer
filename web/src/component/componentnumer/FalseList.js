import React, { Component } from "react";
import { Col ,Button } from "antd";
import False from './../../Roots of equations/False'

class UserList extends Component {
  call = ()=>{
    var f = new False()
    const { equation ,xl ,xr} = this.props
    f.add(equation ,xl ,xr)
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