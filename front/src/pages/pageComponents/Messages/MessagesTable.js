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

export default class MessagesTable extends Component {
  state = {
    filterItems: '',
    showAddNewModal: false,
    chat: '',
    sender: '',
    timestamp: '',
    channel: '',
    state: 0,
    initialPlaeState: 0,
    type: 'text',
    text: '',
    uuid: '',
  }

  filterItemChange = values => {
    this.setState({ filterItems: values })
  }

  _renderTable(filter) {
    const allData = this.props.messages;
    const deleteMessage = this.props.deleteMessage;
    let data = allData;
    return <EditableTable dataSource={data} deleteMessage={deleteMessage} updateMessage={this.props.updateMessage}/>
  }
  showAddNewModalFn = () => {
    this.setState({showAddNewModal: true});
  }
  closeAddNewModal = () => {
    this.setState({
      showAddNewModal: false
    });
  }
  createMessage = () => {
    let payload = {
      chat: this.state.chat,
      sender: this.state.sender,
      timestamp: this.state.timestamp,
      channel: this.state.channel,
      state: this.state.state,
      initialPlaeState: this.state.initialPlaeState,
      type: this.state.type,
      text: this.state.text,
      uuid: this.state.uuid,
    }
    this.props.createMessage(payload);
    this.setState({
      showAddNewModal: false
    });
  }
  _handleOnChange = (key, value) => {
    this.setState({ [key]: value });
  }
  render(){
    const {showAddNewModal, chat, sender, timestamp, channel, state, initialPlaeState, type, text, uuid} = this.state;
    return(
      <Card title={<h2>Messages</h2>}>
        {/* <Button type="primary"
            onClick={this.showAddNewModalFn} style={{marginBottom: '20px'}}>Add New</Button> */}
        <Modal
          title={'Add New Message'}
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
                  onClick={this.createMessage}
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
              <Input placeholder="Chat" value = {chat} onChange = {e => this._handleOnChange("chat", e.target.value)}/>
            </FormItem>
            <FormItem>
              <Input placeholder="Sender" value = {sender} onChange = {e => this._handleOnChange("sender", e.target.value)}/>
            </FormItem>
            <FormItem>
              <Input placeholder="TimeStamp"  value = {timestamp} onChange = {e => this._handleOnChange("timestamp", e.target.value)}/>
            </FormItem>
            <FormItem>
              <Input placeholder="Channel" value = {channel} onChange = {e => this._handleOnChange("channel", e.target.value)}/>
            </FormItem>
            <FormItem>
              <Input placeholder="State" addonBefore="State" value = {state} onChange = {e => this._handleOnChange("state", e.target.value)}/>
            </FormItem>
            <FormItem>
              <Input placeholder="InitialPlaeState" addonBefore="InitialPlaeState" value = {initialPlaeState} onChange = {e => this._handleOnChange("initialPlaeState", e.target.value)}/>
            </FormItem>
            <FormItem>
              <Input placeholder="Type" addonBefore="Type" value = {type} onChange = {e => this._handleOnChange("type", e.target.value)}/>
            </FormItem>
            <FormItem>
              <Input placeholder="Text" value = {text} onChange = {e => this._handleOnChange("text", e.target.value)}/>
            </FormItem>
            <FormItem>
              <Input placeholder="UUID" value = {uuid} onChange = {e => this._handleOnChange("uuid", e.target.value)}/>
            </FormItem>
          </Card>
        </Modal>
        {this._renderTable()}
      </Card>
    )

  }
}
