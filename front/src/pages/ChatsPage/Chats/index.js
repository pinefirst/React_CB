import React from 'react'

import connect from "react-redux/es/connect/connect"

import './style.scss'
import ChatsTable from '../../pageComponents/Chats/ChatsTable'
import ChatsFilter from '../../pageComponents/Chats/ChatsFilter'


//DB Browser
import { fetchChats, deleteChat, updateChat, createChat } from './../../../ducks/chats';

const mapStateToProps = (state, props) => ({
  chats: state.chats.chats,
  // user: state.user.profile,
})

const mapDispatchToProps = (dispatch, props) => ({

  fetchChats: (payload) => dispatch(fetchChats(payload)),
  deleteChat: (id) => dispatch(deleteChat(id)),
  updateChat: (payload) => dispatch(updateChat(payload)),
  createChat: (payload) => dispatch(createChat(payload)),
})

@connect(mapStateToProps, mapDispatchToProps)

class Chats extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isUser: false,
      feedbackAnalysisDate: [],
      orderAnalysisDate: [],
      mode: ['month', 'month'],

    };
  }

  componentDidMount () {
    let {
      fetchChats,
    }  = this.props

    fetchChats()
  }
  render() {
    let {
      chats,
      deleteChat,
      updateChat,
      createChat,
    } = this.props

    return (
      <div>

        <ChatsFilter
          apiFn={this.props.fetchChats}
        />

        <ChatsTable
          chats={chats}
          deleteChat = {deleteChat}
          updateChat = {updateChat}
          createChat = {createChat}
        />

      </div>
    )
  }
}

export default Chats;
