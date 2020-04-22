import React,{Component} from "react";
import {
  Select,
  Card,
  Button,
  Modal,
  Form, Input, message
} from "antd";


import EditableTable from "./Editrow";

const {Item:FormItem}  = Form;
const {Option, OptGroup} = Select;

export default class ConsolesTable extends Component{

  state = {
    id:'',
    showAddNewModal:false,
  }


  showAddNewModalFn = () => {
    this.setState({showAddNewModal : true});
  }


  closeAddNewModal = () => {
    this.setState({showAddNewModal : false});
  }


  _renderTable(filter){
    return <EditableTable  />
  }

  render() {

    const {showAddNewModal} = this.state
    return(
      <Card title={<h2>Consoles</h2>}>
        <Button type="primary" style={{marginBottom:'20px'}} onClick={this.showAddNewModalFn} >
          Add New
        </Button>
        <Modal
          title={'Add New Console'}
          style={{top:8}}
          visible={showAddNewModal}
          className={"centered"}
          maskClosable={true}
          onCancel={this.closeAddNewModal} width="900px"
          footer={[
            <div>
              <div>
                <Button type="primary" icon="mail">
                  Submit
                </Button>
                <Button key="backToTable" icon="close" onClick={this.closeAddNewModal}>
                  Return
                </Button>
              </div>
            </div>
          ]}>
          <Card>
            <FormItem>
              <Input placeholder="ID" />
            </FormItem>
            <FormItem>
              ContentfulState:<Input placeholder="ContentfulState" />
            </FormItem>
            <FormItem>
              <Input placeholder="Title" />
            </FormItem>
            <FormItem>
              <Input placeholder="ImageUrl" addonBefore="ImageUrl"/>
            </FormItem>
            <FormItem>
              Priority:<Input placeholder="priority" />
            </FormItem>
            <FormItem>
              Count:<Input placeholder="count" />
            </FormItem>
            <FormItem>
              <Input placeholder="Tag" />
            </FormItem>
            <FormItem>
              <Input placeholder="TagTitle" />
            </FormItem>
          </Card>
        </Modal>
        {this._renderTable()}
      </Card>
    )
  }
}


