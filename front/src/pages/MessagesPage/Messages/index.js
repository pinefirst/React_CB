import React from 'react'

import connect from "react-redux/es/connect/connect"

import './style.scss'
import MessagesTable from '../../pageComponents/Messages/MessagesTable'
import MessagesFilter from '../../pageComponents/Messages/MessagesFilter'


//DB Browser
import { fetchMessages, deleteMessage, updateMessage, createMessage } from './../../../ducks/messages';

const mapStateToProps = (state, props) => ({
  messages: state.messages.messages,
  // user: state.user.profile,
})

const mapDispatchToProps = (dispatch, props) => ({
  fetchMessages: (payload) => dispatch(fetchMessages(payload)),
  deleteMessage: (id) => dispatch(deleteMessage(id)),
  updateMessage: (payload) => dispatch(updateMessage(payload)),
  createMessage: (payload) => dispatch(createMessage(payload)),
})

@connect(mapStateToProps, mapDispatchToProps)

class Messages extends React.Component {
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
      fetchMessages,
    }  = this.props

    fetchMessages()
  }
  render() {
    let {
      messages,
      deleteMessage,
      updateMessage,
      createMessage,
    } = this.props

    return (
      <div>
        <MessagesFilter
          apiFn={this.props.fetchMessages}
        />
        <MessagesTable
          messages={messages}
          deleteMessage = {deleteMessage}
          updateMessage = {updateMessage}
          createMessage = {createMessage}
        />
      </div>
    )
  }
}

export default Messages;
