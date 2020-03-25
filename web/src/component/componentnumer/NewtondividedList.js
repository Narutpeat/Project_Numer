import React, { Component } from "react";
import { Col ,Button } from "antd";
import Newtondivided from './../../Interpolation And Extrapolation/Newtondivided'

class UserList extends Component {
  call = ()=>{
    var newtondivided = new Newtondivided()
    const { X,FX,XN} = this.props
    newtondivided.add(X,FX,XN)
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