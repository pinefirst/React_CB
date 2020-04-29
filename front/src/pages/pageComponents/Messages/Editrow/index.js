import React from "react";
import {Input, Card, message, Table, Popconfirm} from "antd";
import './style.scss';


const EditableCell =({ editalbe, value, onChange}) => (
  <div>
    {editalbe? (
      <Input value={value} style={{margin:'-5px 0'}}/>
    ) : (
      value
    )}
  </div>
)


const defaultPagination = {
  pageSizeOptions: ["10", "25", "50"],
  showSizeChanger: true,
  current: 1,
  size: "small",
  showTotal: (total) => `Total ${total} items`,
  total: 0, pageSize: 10
};


class EditableTable extends React.Component{

  state={
    pager: { ...defaultPagination },
    data: [],
  }

  constructor(props){
    super(props);
    this.columns = [
      {
        title: 'Id',
        dataIndex: '_id',
        width: '13%',
        // render: (text, record) => this.renderColumns(text, record, '_id'),
      },
      {
        title: 'Chat',
        dataIndex: 'chat',
        width: '8%',
        //render: (text, record) => this.renderColumns(text, record, 'chat'),
      },
      {
        title: 'Sender',
        dataIndex: 'sender',
        width: '8%',
        // render: (text, record) => this.renderColumns(text, record, 'sender'),
      },
      {
        title: 'TimeStamp',
        dataIndex: 'timestamp',
        width: '8%',
        render: (text, record) => this.renderColumns(text, record, 'timestamp'),
      },
      {
        title: 'Channel',
        dataIndex: 'channel',
        width: '12%',
        render: (text, record) => this.renderColumns(text, record, 'channel'),
      },
      {
        title: 'State',
        dataIndex: 'state',
        width: '5%',
        sorter: (a, b) => a.state - b.state,
        render: (text, record) => this.renderColumns(text, record, 'state'),
      },
      {
        title: 'Type',
        dataIndex: 'type',
        width: '5%',
        render: (text, record) => this.renderColumns(text, record, 'type'),
      },
      {
        title: 'Text',
        dataIndex: 'text',
        width: '8%',
        render: (text, record) => this.renderColumns(text, record, 'text'),
      },
      {
        title: 'InitialPlaeState',
        dataIndex: 'initialPlaeState',
        width: '5%',
        render: (text, record) => this.renderColumns(text, record, 'initialPlaeState'),
      },
      {
        title: 'Uuid',
        dataIndex: 'uuid',
        width: '10%',
        render: (text, record) => this.renderColumns(text, record, 'uuid'),
      },
      {
        title: 'operation',
        dataIndex: 'operation',
        //key: ids.generate(),
        render: (text, record) => {
          const { editable } = record
          return (
            <div className="editable-row-operations">
            {/*  {editable ? (*/}
            {/*    <span>*/}
            {/*        <a onClick={() => this.save(record._id)} style={{padding: '15px'}}>Save</a>*/}
            {/*        <Popconfirm title="Sure to cancel?" onConfirm={() => this.cancel(record._id)}>*/}
            {/*          <a style={{padding: '15px'}}>Cancel</a>*/}
            {/*        </Popconfirm>*/}
            {/*      </span>*/}
            {/*  ) : (*/}
            {/*    <span>*/}
            {/*        <a onClick={() => this.edit(record._id)} style={{padding: '15px'}}>Edit</a> | */}
            {/*        <Popconfirm title="Sure to delete?" onConfirm={() => this.delete(record._id)}><a style={{padding: '15px'}}>Delete</a></Popconfirm>*/}
            {/*      </span>*/}
            {/*  )}*/}
            </div>
          )
        },
      },
    ]

  }

  render() {
    const {pager} = this.state;
    return(
      <Table bordered columns={this.columns} pagination={pager} />
    )
  }
}

export default EditableTable;
