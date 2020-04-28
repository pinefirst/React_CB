import React from "react";
import Helmet from 'react-helmet';

import Page from "../../components/LayoutComponents/Page";
import Chats from "./Chats";

class ChatPage extends React.Component{

  static defaultProps = {
    pathName:'Chats',
    roles:['agent', 'administrator'],
  }

  render() {

    const props = this.props
    return(
      <Page {...props}>
        <Helmet title="MessageTable" />
        <Chats/>
      </Page>

    )
  }
}


export default ChatPage;
