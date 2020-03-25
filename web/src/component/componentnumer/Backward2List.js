import React, { Component } from "react";
import { Col ,Button } from "antd";
import Backward2 from '../../Numerical Differentiation/Backward2'

class UserList extends Component {
  call = ()=>{
    var backward2 = new Backward2()
    const { equation ,x ,h,d} = this.props
    backward2.add(equation ,x ,h,d)
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