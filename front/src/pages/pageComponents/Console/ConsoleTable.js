import React, { Component } from 'react'
import {
  Select,
  Card,
  Button,
  Modal,
  Form, Input, message
} from 'antd'
import EditableTable from './Editrow'


const {Item: FormItem} = Form;
const { Option, OptGroup } = Select

export default class ConsolesTable extends Component {
  state = {
    id: '',
    filterItems: '',
    showAddNewModal: false,
    contentfulState: 0,
    imageUrl: 'https://',
    count: 0,
    priority: 0,
    tag: '',
    tagTitle: '',
    title: '',
  }

  filterItemChange = values => {
    this.setState({ filterItems: values })
  }

  _renderTable(filter) {
    const allData = this.props.consoles;
    const deleteConsole = this.props.deleteConsole;
    let data = allData;
    return <EditableTable dataSource={data} deleteConsole={deleteConsole} updateConsole={this.props.updateConsole}/>
  }
  showAddNewModalFn = () => {
    this.setState({showAddNewModal: true});
  }
  closeAddNewModal = () => {
    this.setState({
      showAddNewModal: false
    });
  }
  createConsole = () => {
    let payload = {
      _id:this.state.id,
      title: this.state.title,
      count: this.state.count,
      priority: this.state.priority,
      contentfulState: this.state.contentfulState,
      tag: this.state.tag,
      tagTitle: this.state.tagTitle,
      imageUrl: this.state.imageUrl,
    }
    if(this.state.id === ''){
      message.warning('Warning : ID is required');
    }else if(this.state.title === ''){
      message.warning('Warning : Title is required');
    }else{
      this.props.createConsole(payload);
      this.setState({
        showAddNewModal: false
      });
    }
  }
  _handleOnChange = (key, value) => {
    this.setState({ [key]: value });
  }
  render(){
    const {showAddNewModal, title, count, contentfulState, imageUrl, tag, tagTitle, priority, id} = this.state;
    return(
      <Card title={<h2>Consoles</h2>}>
        <Button type="primary"
                onClick={this.showAddNewModalFn} style={{marginBottom: '20px'}}>Add New</Button>
        <Modal
          title={'Add New Console'}
          style={{ top: 10 }}
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
                  onClick={this.createConsole}
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
              <Input placeholder="ID" value = {id} onChange = {e => this._handleOnChange("id", e.target.value)}/>
            </FormItem>
            <FormItem>
              ContentfulState:<Input placeholder="ContentfulState" value = {contentfulState} onChange = {e => this._handleOnChange("contentfulState", e.target.value)}/>
            </FormItem>
            <FormItem>
              <Input placeholder="Title" value = {title} onChange = {e => this._handleOnChange("title", e.target.value)}/>
            </FormItem>
            <FormItem>
              <Input placeholder="ImageUrl" addonBefore="ImageUrl" value = {imageUrl} onChange = {e => this._handleOnChange("imageUrl", e.target.value)}/>
            </FormItem>
            <FormItem>
              Priority:<Input placeholder="priority" value = {priority} onChange = {e => this._handleOnChange("priority", e.target.value)}/>
            </FormItem>
            <FormItem>
              Count:<Input placeholder="count" value = {count} onChange = {e => this._handleOnChange("count", e.target.value)}/>
            </FormItem>
            <FormItem>
              <Input placeholder="Tag" value = {tag} onChange = {e => this._handleOnChange("tag", e.target.value)}/>
            </FormItem>
            <FormItem>
              <Input placeholder="TagTitle" value = {tagTitle} onChange = {e => this._handleOnChange("tagTitle", e.target.value)}/>
            </FormItem>
          </Card>
        </Modal>
        {this._renderTable()}
      </Card>
    )

  }
}
