import React, {Component} from 'react'
import './style.scss'
import { Table, Input, Popconfirm } from 'antd'
import ids from 'short-id'



const EditableCell = ({ editable, value, onChange }) => (
  <div>
    {editable ? (
      <Input
        style={{ margin: '-5px 0' }}
        value={value}
        onChange={e => onChange(e.target.value)}
      />
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

class EditableTable extends React.Component {

  state={
    pager: { ...defaultPagination },
    data: [],
  }

  constructor(props) {
    super(props)
    this.columns = [
      {
        title: 'Id',
        dataIndex: '_id',
        width: 200,
        fixed: 'left',
        // render: (text, record) => this.renderColumns(text, record, '_id'),
      },
      {
        title: 'Title',
        dataIndex: 'title',
        width: 100,
        render: (text, record) => this.renderColumns(text, record, 'title'),
      },
      {
        title: 'ImageUrl',
        dataIndex: 'imageUrl',
        width: 100,
        render: (text, record) =>  <div><img src={text} alt={text} width={100}/></div>,
      },
      {
        title: 'Channel',
        dataIndex: 'channel',
        width: 200,
        render: (text, record) => this.renderColumns(text, record, 'channel'),
      },
      {
        title: 'Members',
        dataIndex: 'members',
        width: 200,
        //render: (text, record) => this.renderColumns(text, record, 'members'),
      },
      {
        title: 'MembersInChat',
        dataIndex: 'membersInChat',
        width: 150,
        render: (text, record) => this.renderColumns(text, record, 'membersInChat'),
      },
      {
        title: 'Type',
        dataIndex: 'type',
        width: 100,
        render: (text, record) => this.renderColumns(text, record, 'type'),
      },
      {
        title: 'State',
        dataIndex: 'state',
        width: 100,
        render: (text, record) => this.renderColumns(text, record, 'state'),
      },
      {
        title: 'CreatedAt',
        dataIndex: 'createdAt',
        width: 200,
        render: (text, record) => this.renderColumns(text, record, 'createdAt'),
      },
      {
        title: 'UpdatedAt',
        dataIndex: 'updatedAt',
        width: 200,
        render: (text, record) => this.renderColumns(text, record, 'updatedAt'),
      },
      {
        title: 'LastMessage',
        dataIndex: 'lastMessage',
        width: 200,
        //render: (text, record) => this.renderColumns(text, record, 'lastMessage'),
      },
      {
        title: 'Approvals',
        dataIndex: 'approvals',
        width: 200,
        //render: (text, record) => this.renderColumns(text, record, 'approvals'),
      },
      {
        title: 'IsBae',
        dataIndex: 'isBae',
        width: 100,
        render: (text, record) => this.renderColumns(text, record, 'isBae'),
      },
      {
        title: 'IsConnected',
        dataIndex: 'isConnected',
        width: 100,
        render: (text, record) => this.renderColumns(text, record, 'isConnected'),
      },
      {
        title: 'IsApproved',
        dataIndex: 'isApproved',
        width: 100,
        render: (text, record) => this.renderColumns(text, record, 'isApproved'),
      },
      {
        title: 'Blocked',
        dataIndex: 'blocked',
        width: 100,
        render: (text, record) => this.renderColumns(text, record, 'blocked'),
      },
      {
        title: 'DelectedFor',
        dataIndex: 'delectedFor',
        width: 100,
        render: (text, record) => this.renderColumns(text, record, 'delectedFor'),
      },
      {
        title: 'AdminId',
        dataIndex: 'adminId',
        width: 250,
        //render: (text, record) => this.renderColumns(text, record, 'adminId'),
      },
      {
        title: 'operation',
        dataIndex: 'operation',
        width: 200,
        fixed: 'right',
        //key: ids.generate(),
        render: (text, record) => {
          const { editable } = record
          return (
            <div className="editable-row-operations">
              {editable ? (
                <span>
                    <a onClick={() => this.save(record._id)} style={{padding: '15px'}}>Save</a>
                    <Popconfirm title="Sure to cancel?" onConfirm={() => this.cancel(record._id)}>
                      <a style={{padding: '15px'}}>Cancel</a>
                    </Popconfirm>
                  </span>
              ) : (
                <span>
                    <a onClick={() => this.edit(record._id)} style={{padding: '15px'}}>Edit</a> |
                    <Popconfirm title="Sure to delete?" onConfirm={() => this.delete(record._id)}><a style={{padding: '15px'}}>Delete</a></Popconfirm>
                  </span>
              )}
            </div>
          )
        },
      },
    ]
    let data = this.props.dataSource;
    this.cacheData = data.map(item => ({ ...item }))
  }
  componentDidMount(){
    this.setState({data: this.props.dataSource})
  }
  componentWillReceiveProps(props){
    this.setState({data: props.dataSource})
  }
  renderColumns(text, record, column) {
    return (
      <EditableCell
        editable={record.editable}
        value={text}
        onChange={value => this.handleChange(value, record._id, column)}
      />
    )
  }
  handleChange(value, key, column) {
    const newData = [...this.state.data]
    const target = newData.filter(item => key === item._id)[0]
    if (target) {
      target[column] = value
      this.setState({ data: newData })
    }
  }
  edit(key) {
    const newData = [...this.state.data]
    const target = newData.filter(item => key === item._id)[0]
    if (target) {
      target.editable = true
      this.setState({ data: newData })
    }
  }
  save(key) {
    const newData = [...this.state.data]
    const target = newData.filter(item => key === item._id)[0]
    if (target) {
      delete target.editable
      this.setState({ data: newData })
      this.cacheData = newData.map(item => ({ ...item }))
      this.props.updateChat(target)
    }
  }
  delete(key) {
    this.props.deleteChat(key);
  }
  cancel(key) {
    const newData = [...this.state.data]
    const target = newData.filter(item => key === item._id)[0]
    if (target) {
      Object.assign(target, this.cacheData.filter(item => key === item._id)[0])
      delete target.editable
      this.setState({ data: newData })
    }
  }
  handleTableChange = (pagination, filters, sorter) => {
    if (this.state.pager) {
      const pager = { ...this.state.pager };
      if (pager.pageSize !== pagination.pageSize) {
        this.pageSize = pagination.pageSize;
        pager.pageSize = pagination.pageSize;
        pager.current = 1;
      } else {
        pager.current = pagination.current;
      }
      this.setState({
        pager: pager
      });
    }
  }
  render() {
    const { pager } = this.state;
    return <Table bordered  dataSource={this.state.data} columns={this.columns} pagination={pager}
                  onChange={this.handleTableChange} scroll={{ x: 2900 }}
      //rowKey={record=>ids.generate()}
    />

  }
}

export default EditableTable;
