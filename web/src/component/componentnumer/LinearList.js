import React, { Component } from "react";
import { Col ,Button } from "antd";
import Linear from './../../Least-Squares Regression/Linear'

class UserList extends Component {
  call = ()=>{
    var linear = new Linear()
    const { X,FX,XN} = this.props
    linear.add(X,FX,XN)
  }
  render() {
    console.log('userlist : ',this.props);
    const { X,FX,XN } = this.props;
    return (
      <div>
       <Col span={12} style={{marginTop : 20}}>
    <Button onClick={this.call}>X={ X} ,F(X)={FX} ,XN={XN} </Button>
            
          </Col>
      </div>
    );
  }
}
export default UserList;