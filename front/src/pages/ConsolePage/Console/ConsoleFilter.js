import React, {Component} from "react";
import {Button, Card, Input, message} from "antd";


export default class ConsoleFilter extends Component{

  state = {
    filter:'',
  }


  onQueryChange = (filter) => {
    this.setState({filter:filter})
  }


  onClickFilterSearch = e => {
    const {apiFn} = this.props;
    const {filter} = this.state;
    if (filter){
      apiFn({filter})
    }else {
      message.warning('Please Input Filter first')
    }
  }


  render() {
    return(
      <div className="mb-4" >
        <Card title="Filter" >
          <Input className="mr-2" style={{width:'20%'}} onChange={(e) => this.onQueryChange(e.target.value)} />
          <Button type="primary" onClick={this.onClickFilterSearch} >Search</Button>
        </Card>
      </div>
    );
  }
}
