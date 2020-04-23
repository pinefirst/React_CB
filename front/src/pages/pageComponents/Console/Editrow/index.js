import React from "react";
import './style.scss';
import {Table, Input, Popconfirm} from "antd";


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
  pageSizeOptions:["10","25","50"],
  showSizeChanger:true,
  current:1,
  size:"small",
  showTotal:(total) => `Total ${total} items`,
  total:0,
  pageSize:10
};


class EditableTable extends React.Component{

  state = {
    data:[],
    pager:{...defaultPagination},
  };

  constructor(props){
    super(props);
    this.columns = [
      {
        title: 'Id',
        dataIndex: '_id',
        width: '18%',

      },
      {
        title: 'Contentful State',
        dataIndex: 'contentfulState',
        width: '8%',
        sorter: (a, b) => a.contentfulState - b.contentfulState,
        render: (text, record) => this.renderColumns(text, record, 'contentfulState'),
      },
      {
        title: 'Title',
        dataIndex: 'title',
        width: '10%',
        render:(text, record) => this.renderColumns(text, record, 'title'),
      },
      {
        title: 'Image URL',
        dataIndex: 'imageUrl',
        width: '16%',
        render: (text, record) => <div><img src={text} alt={text} width={100}/></div>,
      },
      {
        title: 'Priority',
        dataIndex: 'priority',
        width: '5%',
        sorter: (a, b) => a.priority - b.priority,
        render: (text, record) => this.renderColumns(text, record, 'priority'),
      },
      {
        title: 'Count',
        dataIndex: 'count',
        width: '10%',
        sorter: (a, b) => a.count - b.count,
        render: (text, record) => this.renderColumns(text, record, 'count'),
      },
      {
        title: 'Tag',
        dataIndex: 'tag',
        width: '10%',
        render: (text, record) => this.renderColumns(text, record, 'tag'),
      },
      {
        title: 'TagTitle',
        dataIndex: 'tagTitle',
        width: '10%',
        render: (text, record) => this.renderColumns(text, record, 'tagTitle'),
      },
      {
        title: 'operation',
        dataIndex: 'operation',

      },
    ]
    let data = this.props.dataSource;
  }


  handleChange(value, key, column){
    const newData = [...this.state.data];
    const target = newData.filter(item => key === item._id[0]);
    if (target){
      target[column] = value;
      this.setState({data : newData})
    }
  }


  renderColumns(text, record, column) {
    return (
      <EditableCell
        value={text}
        onChange={value => this.handleChange(value, record._id, column)}
      />
    )
  }


  componentDidMount() {
    this.setState({data:this.props.dataSource})
  }

  componentWillReceiveProps(nextProps, nextContext) {
    this.setState({data:nextProps.dataSource})
  }

  render() {
    const {pager} = this.state;
    return(
      <Table bordered columns={this.columns} dataSource={this.state.data} pagination={pager}
      />
    )
  }
}


export default EditableTable;
