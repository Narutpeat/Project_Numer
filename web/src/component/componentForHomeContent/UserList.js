import React, { Component } from "react";
import { Col ,Button } from "antd";

class UserList extends Component {
  render() {
    console.log('userlist : ',this.props);
    const { equation ,xl ,xr,x } = this.props;
    return (
      <div>
       <Col span={12} style={{marginTop : 20}}>
    <Button >{ equation} ,{xl} ,{xr },{x} </Button>
            
          </Col>
      </div>
    );
  }
}
export default UserList;
