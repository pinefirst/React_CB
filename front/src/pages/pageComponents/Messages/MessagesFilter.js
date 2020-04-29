import React, {Component} from "react";
import {Input, Select, Form, Modal, Card, Popconfirm, Button, message} from "antd";


export default class MessagesFilter extends Component{

  render() {
    return (
      <div className="mb-4">
        <Card title="filter">
          <Input className="mr-2" style={{width:'20%'}}/>
          <Button type="primary" >Search</Button>
        </Card>
      </div>
    );
  }
}


