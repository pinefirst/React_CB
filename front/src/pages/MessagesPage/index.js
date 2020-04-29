import React from "react";
import Helmet from 'react-helmet';

import Page from "../../components/LayoutComponents/Page";
import Messages from "./Messages";

class MessagesPage extends React.Component{

  static defaultProps = {
    pathName:"MessagesPage",
    roles:['agent', 'administrator'],
  }


  render() {
    const props = this.props
    return(
      <Page {...props}>
        <Helmet title="MessagesPage" />
        <Messages/>
      </Page>
    )
  }
}

export default MessagesPage;
