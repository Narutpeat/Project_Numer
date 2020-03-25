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
      var r=[]
      for(var j=0;j<a.length;j++){
        string.push(a[i][j])
        string.push('\xa0')
      }
      string.push('\xa0\xa0')
      string.push(a[i][j])
      string.push(<br/>)
    }
    return string
  }
  render() {
    console.log('userlist : ',this.props);
    const { X,FX,XN } = this.props;
    return (
      <div>
       <Col span={12} style={{marginTop : 20}}>
       <button type="button" class="btn btn-primary"onClick={this.call}>{ this.show()} F(X)={FX} ,XN={XN} </button>
            
          </Col>
      </div>
    );
  }
}
export default UserList;