import React from "react";
import './style.scss';
import {Table, Input, Popconfirm} from "antd";


class EditableTable extends React.Component{

  state = {
    data:[],
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

      },
      {
        title: 'Title',
        dataIndex: 'title',
        width: '10%',

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

      },
      {
        title: 'Count',
        dataIndex: 'count',
        width: '10%',

      },
      {
        title: 'Tag',
        dataIndex: 'tag',
        width: '10%',

      },
      {
        title: 'TagTitle',
        dataIndex: 'tagTitle',
        width: '10%',

      },
      {
        title: 'operation',
        dataIndex: 'operation',

      },
    ]
    let data = this.props.dataSource;
  }


  componentDidMount() {
    this.setState({data:this.props.dataSource})
  }

  componentWillReceiveProps(nextProps, nextContext) {
    this.setState({data:nextProps.dataSource})
  }

  render() {
    return(
      <Table bordered columns={this.columns} dataSource={this.state.data}
      />
    )
  }
}


export default EditableTable;
