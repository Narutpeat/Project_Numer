import React, { Component } from "react";
import { Col ,Button } from "antd";
import Compositesimpson from './../../Integration Techniques/Compositesimpson'

class UserList extends Component {
  call = ()=>{
    var compositesimpson = new Compositesimpson()
    const { equation ,a ,b,n} = this.props
    compositesimpson.add(equation ,a ,b,n)
  }
  render() {
    console.log('userlist : ',this.props);
    const { equation ,a ,b,n} = this.props;
    return (
      <div>
       <Col span={12} style={{marginTop : 20}}>
    <Button onClick={this.call}>equation={ equation} ,a={a} ,b={b } ,N={n} </Button>
            
          </Col>
      </div>
    );
  }
}
export default UserList;