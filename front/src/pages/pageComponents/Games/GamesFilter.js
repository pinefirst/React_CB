import React, {Component} from "react";
import {Input, Card,Select, Button, message} from "antd";


export default class GamesFilter extends Component{

  state = {
    filter:''
  }


  onQueryChange = (filter) => {
    this.setState({filter:filter});
  }


  onClickFilterChange = e => {
      const {apiFn} = this.props;
      const {filter} = this.state;
      if (filter){
        apiFn({filter})
      }else {
        message.warning('Please input Filter');
      }
  }


  render() {
    return(
      <div className="mb-4">
        <Card title="Filter" >
          <Input
            className="mt-2"
            onChange={this.onQueryChange}
            style={{width:'20%'}}
          />
          <Button type="primary" onClick={this.onClickFilterChange} >Search</Button>
        </Card>
      </div>
    )
  }
}



