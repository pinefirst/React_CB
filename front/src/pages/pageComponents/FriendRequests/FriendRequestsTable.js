import React, {Component} from "react";
import {Select, Card, Button, Modal, Form, Input} from "antd";

import EditableTable from "./Editrow";

const {Item:FormItem} = Form;
const {Option, OptGroup} = Select;


export default class FriendRequestsTable extends Component{

  state = {
    filterItems: '',
    showAddNewModal: false,
    newRequesteeId: '',
    newRequestorId: '',
    newState: '',
  }


  filterItemChange = value => {
    this.setState({filterItems:value})
  }


  _renderTable(filter){

    const allData = this.props.friendrequests;
    const deleteFriendRequest = this.props.deleteFriendRequest;
    let data = allData;
    return(
      <EditableTable
        dataSource={data} deleteFriendRequest={deleteFriendRequest} updateFriendRequest={this.props.updateFriendRequest}
      />
    )
  }


  _handleOnChange = (key, value) => {
    this.setState({[key] : value});
  }


  render() {

    const {newState} = this.state;
    return(
      <div>
        {this._renderTable()}
      </div>
    )
  }
}



