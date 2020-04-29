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

export default class GamesTable extends Component {
  state = {
    filterItems: '',
    id: '',
    contentfulState: 0,
    imageUrl: 'https://',
    count: 0,
    priority: 0,
    title: '',
    showAddNewModal: false,
  }

  filterItemChange = values => {
    this.setState({ filterItems: values })
  }

  _renderTable(filter) {
    const allData = this.props.games;
    const deleteGame = this.props.deleteGame;
    let data = allData;
    return <EditableTable dataSource={data} deleteGame={deleteGame} updateGame={this.props.updateGame}/>
  }
  showAddNewModalFn = () => {
    this.setState({showAddNewModal: true});
  }
  getContentful = () => {
    this.props.getGamesFromContentful();
  }
  closeAddNewModal = () => {
    this.setState({
      showAddNewModal: false
    });
  }
  createGame = () => {
    let payload = {
      _id:this.state.id,
      title: this.state.title,
      count: this.state.count,
      priority: this.state.priority,
      contentfulState: this.state.contentfulState,
      imageUrl: this.state.imageUrl,
    }
    if(this.state.id === ''){
      message.warning('Warning : ID is required');
    }else if(this.state.title === ''){
      message.warning('Warning : Title is required');
    }else{
      this.props.createGame(payload);
      this.setState({
        showAddNewModal: false
      });
    }
  }
  _handleOnChange = (key, value) => {
    this.setState({ [key]: value });
  }
  render(){
    const {showAddNewModal, title, count, contentfulState, imageUrl,priority, id} = this.state;
    return(
      <Card title={<h2>Games</h2>}>
        <Button type="primary"
                onClick={this.showAddNewModalFn} style={{marginBottom: '20px'}}>Add New</Button>
        <Button type="primary" icon="download"
                onClick={this.getContentful} style={{background:'#119d0e',marginBottom: '20px',float:'right'}}>Update from Contentful</Button>
        <Modal
          title={'Add New Game'}
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
                  onClick={this.createGame}
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
              <Input placeholder="Title" value = {title} onChange = {e => this._handleOnChange("title", e.target.value)}/>
            </FormItem>
            <FormItem>
              ContentfulState:<Input placeholder="ContentfulState" value = {contentfulState} onChange = {e => this._handleOnChange("contentfulState", e.target.value)}/>
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
          </Card>
        </Modal>
        {this._renderTable()}
      </Card>
    )

  }
}
