import React from "react";
import './style.scss';
import {Table, Input, Popconfirm} from "antd";


const EditableCell =({editable, value, onChange}) => (
  <div>
    {editable? (
      <Input
        style={{margin:'-5px 0'}}
        value={value}
        onChange={onChange}
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


class EditableTable extends React.Component{

  state = {
    pager:{...defaultPagination},
    data:[],
  }

  constructor(props) {
    super(props);
    this.columns = [
      {
        title: 'Id',
        dataIndex: '_id',
        //key: 'id',
        width: '20%',
        // render: (text, record) => this.renderColumns(text, record, '_id'),
      },
      {
        title: 'Requestee',
        dataIndex: 'requestee',
        //key: 'friend',
        width: '20%',
        //render: (text, record) => this.renderColumns(text, record, 'requestee'),
      },
      {
        title: 'Requestor',
        dataIndex: 'requestor',
        //key: 'user',
        width: '20%',
        //render: (text, record) => this.renderColumns(text, record, 'requestor'),
      },
      {
        title: 'Date Created',
        dataIndex: 'createdAt',
        //key: 'date',
        width: '20%',
        render: (text, record) => this.renderColumns(text, record, 'createdAt'),
      },
      {
        title: 'State',
        dataIndex: 'state',
        //key: 'user',
        width: '10%',
        sorter: (a, b) => a.state - b.state,
        render: (text, record) => this.renderColumns(text, record, 'state'),
      },
      {
        title: 'operation',
        dataIndex: 'operation',
        //key: ids.generate(),
        render:(text, record) => {
          const {editable} = record;
          return(
            <div className="editable-row-operations" >
              {editable? (
                <span>
                  <a onClick={() => this.save(record._id)} style={{padding:'15px'}} >Save</a>
                  <Popconfirm title="Sure to cancel?" onConfirm={() => this.cancel(record._id)}>
                    <a style={{padding:'15px'}} >Cancel</a>
                  </Popconfirm>
                </span>
              ): (
                <span>
                  <a onClick={() => this.edit(record._id)} style={{padding:'15px'}} >Edit</a>
                  <Popconfirm title="Sure to delete?" onConfirm={() => this.delete(record._id)}>
                    <a style={{padding:'15px'}} >Delete</a>
                  </Popconfirm>
                </span>
              )}
            </div>
          )
        }
      },
    ]
    let data = this.props.dataSource;
    this.cacheData = data.map(item => ({...item}))
  }


  componentDidMount() {
    this.setState({data: this.props.dataSource})
  }


  componentWillReceiveProps(nextProps, nextContext) {
    this.setState({data:nextProps.dataSource})
  }


  renderColumns(text, record, column){
    return(
      <EditableCell
        editable={record.editable}
        value={text}
        onChange={value => this.handleChange(value, record._id, column)}
      />
    )
  }


  handleChange(value, key, column){
    const newData = [...this.state.data];
    const target = newData.filter(item => key === item._id)[0];
    if (target){
      target[column] = value;
      this.setState({data:newData})
    }
  }


  cancel(key){
    const newData = [...this.state.data];
    const target = newData.filter(item => key === item._id)[0];
    if (target){
      Object.assign(target, this.cacheData.filter(item => key === item._id)[0]);
      delete target.editable;
      this.setState({data : newData})
    }
  }


  edit(key){
    const newData = [...this.state.data];
    const target = newData.filter(item => key === item._id)[0];
    if (target){
      target.editable = true;
      this.setState({data:newData})
    }
  }


  save(key){
    const newData = [...this.state.data];
    const target = newData.filter(item => key === item._id)[0];
    if (target){
      delete target.editable;
      this.setState({data:newData});
      this.cacheData = newData.map(item => ({...item}));
      this.props.updateFriendRequest(target)
    }
  }

  delete(key){
    this.props.deleteFriendRequest(key);
  }


  render() {
    return(
      <Table
        bordered
        columns={this.columns}
      />
    )
  }
}


export default EditableTable;
