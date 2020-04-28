import React, {Component} from "react";
import {Card, Input, message, Button, Select} from "antd";

import EditableTable from './Editrow/index';


export default class GamesTable extends Component{

  _renderTable(filter){
    return <EditableTable />
  }


  render() {
    return(
      <div  >
        <Card title={<h2>Games</h2>} >
          <Button type="primary"  style={{marginBottom:'20px'}}>Add New</Button>
          <Button type="primary" icon="download" style={{background:'#119d0e',marginBottom: '20px',float:'right'}} >upload </Button>
          {this._renderTable()}
        </Card>
      </div>
    )
  }
}
