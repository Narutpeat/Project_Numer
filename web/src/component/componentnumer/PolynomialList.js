import React, { Component } from "react";
import { Col ,Button } from "antd";
import Polynomial from './../../Least-Squares Regression/Polynomial'

class UserList extends Component {
  call = ()=>{
    var polynomial = new Polynomial()
    const { X,FX,XN,M} = this.props
    polynomial.add(X,FX,XN,M)
  }
  render() {
    console.log('userlist : ',this.props);
    const { X,FX,XN,M } = this.props;
    return (
      <div>
       <Col span={12} style={{marginTop : 20}}>
    <Button onClick={this.call}>X={ X} ,F(X)={FX} ,M={M} ,XN={XN} </Button>
            
          </Col>
      </div>
    );
  }
}
export default UserList;