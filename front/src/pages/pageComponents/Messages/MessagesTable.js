import React,{Component} from "react";

import EditableTable from "./Editrow";
import {Card} from "antd";


export default class MessagesTable extends Component{

  render() {
    return(
      <Card title="Message">
        <EditableTable/>
      </Card>
    )
  }
}
