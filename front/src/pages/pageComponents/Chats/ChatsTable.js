import React, { Component } from 'react'
import {
  Select,
  Card,
  Button,
  Modal,
  Form, Input
} from 'antd'

import EditableTable from './Editrow'

const {Item: FormItem} = Form;
const { Option, OptGroup } = Select

export default class ChatsTable extends Component {
  state = {
    filterItems: '',
    showAddNewModal: false,

    title: '',
    imageUrl: '',
    channel: '',
    members: '',
    membersInChat: '',
    type: '', //single, group
    state: '', //text, open
    createdAt: '',
    lastMessage: '',
    approvals: '',
    isBae: false,
    isConnection: false,
    isApproved: false,
    blocked: false,
    deletedFor: '',
    adminId:  '',
  }

  filterItemChange = values => {
    this.setState({ filterItems: values })
  }

  _renderTable(filter) {
    const allData = this.props.chats;
    const deleteChat = this.props.deleteChat;
    let data = allData;
    return <EditableTable dataSource={data} deleteChat={deleteChat} updateChat={this.props.updateChat}/>
  }
  showAddNewModalFn = () => {
    this.setState({showAddNewModal: true});
  }
  closeAddNewModal = () => {
    this.setState({
      showAddNewModal: false
    });
  }
  createChat = () => {
    let payload = {
      title: this.state.title,
      imageUrl: this.state.imageUrl,
      channel: this.state.channel,
      members: this.state.members,
      membersInChat: this.state.membersInChat,
      type: this.state.type, //single, group
      state: this.state.state, //text, open
      createdAt: this.state.createdAt,
      lastMessage: this.state.lastMessage,
      approvals: this.state.approvals,
      isBae: false,
      isConnection: false,
      isApproved: false,
      blocked: false,
      deletedFor: this.state.deletedFor,
      adminId:  this.state.adminId,

    }
    this.props.createChat(payload);
    this.setState({
      showAddNewModal: false
    });
  }
  _handleOnChange = (key, value) => {
    this.setState({ [key]: value });
  }
  render(){
    const {showAddNewModal, title, imageUrl, channel, members, membersInChat, type, state, createdAt,
      lastMessage, approvals, isBae, isConnection, isApproved, blocked, deletedFor, adminId} = this.state;
    return(
      <Card title={<h2>Chats</h2>}>
        {/* <Button type="primary"
            onClick={this.showAddNewModalFn} style={{marginBottom: '20px'}}>Add New</Button> */}
        <Modal
          title={'Add New Chat'}
          style={{ top: 5 }}
          visible={showAddNewModal}
          className={"centered"}
          maskClosable={false}
          onCancel={this.closeAddNewModal} width="900px"
          footer={[
            <div key="20840938-somerandomvalue">
              <div>
                <Button
                  type='primary'
                  icon='mail'
                  onClick={this.createChat}
                  loading={this.state.loading}
                >
                  Submit
                </Button>
                <Button
                  key='backToTable'
                  icon='close'
                  onClick={this.closeAddNewModal}
                >
                  Return
                </Button>
              </div>
            </div>
          ]}>
          <Card>
            <FormItem>
              <Input placeholder="Title" value = {title} onChange = {e => this._handleOnChange("title", e.target.value)}/>
            </FormItem>
            <FormItem>
              <Input placeholder="ImageUrl" value = {imageUrl} onChange = {e => this._handleOnChange("imageUrl", e.target.value)}/>
            </FormItem>
            <FormItem>
              <Input placeholder="Channel" value = {channel} onChange = {e => this._handleOnChange("channel", e.target.value)}/>
            </FormItem>
            <FormItem>
              <Input placeholder="Members"  value = {members} onChange = {e => this._handleOnChange("members", e.target.value)}/>
            </FormItem>
            <FormItem>
              <Input placeholder="MembersInChat" addonBefore="State" value = {membersInChat} onChange = {e => this._handleOnChange("membersInChat", e.target.value)}/>
            </FormItem>
            <FormItem>
              <Input placeholder="Type" addonBefore="Type" value = {type} onChange = {e => this._handleOnChange("type", e.target.value)}/>
            </FormItem>
            <FormItem>
              <Input placeholder="State" addonBefore="State" value = {state} onChange = {e => this._handleOnChange("state", e.target.value)}/>
            </FormItem>
            <FormItem>
              <Input placeholder="CreatedAt" value = {createdAt} onChange = {e => this._handleOnChange("createdAt", e.target.value)}/>
            </FormItem>
            <FormItem>
              <Input placeholder="Lastmessage" value = {lastMessage} onChange = {e => this._handleOnChange("lastmessage", e.target.value)}/>
            </FormItem>
            <FormItem>
              <Input placeholder="IsBae"  value = {isBae} onChange = {e => this._handleOnChange("isBae", e.target.value)}/>
            </FormItem>
            <FormItem>
              <Input placeholder="IsConnected"  value = {isConnection} onChange = {e => this._handleOnChange("isConnection", e.target.value)}/>
            </FormItem>
            <FormItem>
              <Input placeholder="IsApproved"  value = {isApproved} onChange = {e => this._handleOnChange("isApproved", e.target.value)}/>
            </FormItem>
            <FormItem>
              <Input placeholder="Blocked" value = {blocked} onChange = {e => this._handleOnChange("blocked", e.target.value)}/>
            </FormItem>
            <FormItem>
              <Input placeholder="DeletedFor" value = {deletedFor} onChange = {e => this._handleOnChange("deletedFor", e.target.value)}/>
            </FormItem>
            <FormItem>
              <Input placeholder="AdminId" value = {adminId} onChange = {e => this._handleOnChange("adminId", e.target.value)}/>
            </FormItem>
          </Card>
        </Modal>
        {this._renderTable()}
      </Card>
    )

  }
}
