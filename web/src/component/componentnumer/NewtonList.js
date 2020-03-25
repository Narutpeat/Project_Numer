import React, { Component } from "react";
import { Col ,Button } from "antd";
import Newton from './../../Roots of equations/Newton'

class UserList extends Component {
  call = ()=>{
    var newton = new Newton()
    const { equation ,x} = this.props
    newton.add(equation ,x)
  }
  render() {
    console.log('userlist : ',this.props);
    const { equation ,x } = this.props;
    return (
      <div>
       <Col span={12} style={{marginTop : 20}}>
    <Button onClick={this.call}>equation={ equation} , x= {x} </Button>
            
          </Col>
          <br></br> 
      <br></br> 
      </div>
    );
  }
}
export default UserList;