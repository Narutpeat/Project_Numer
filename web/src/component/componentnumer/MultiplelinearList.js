import React, { Component } from "react";
import { Col ,Button } from "antd";
import Multiplelinear from './../../Least-Squares Regression/Multiplelinear'

class UserList extends Component {
  call = ()=>{
    var multiplelinear = new Multiplelinear()
    const { X,FX,XN} = this.props
    multiplelinear.add(X,FX,XN)
  }
  show = () =>{
    const {X} = this.props
    var a=Object.values(X)
    var string=[]
    for(var i=0;i<a.length;i++){
      for(var j=0;j<a[0].length;j++){
        if(j<a[0].length-1){
          string+=a[i][j]+","
        }
        else if(j == a[0].length-1){
          string+=a[i][j]+" \n"
        }
      }
    }
    return string
  }
  render() {
    console.log('userlist : ',this.props);
    const { X,FX,XN } = this.props;
    return (
      <div>
       <Col span={12} style={{marginTop : 20}}>
    <Button onClick={this.call}>X={ this.show()} ,F(X)={FX} ,XN={XN} </Button>
            
          </Col>
      </div>
    );
  }
}
export default UserList;