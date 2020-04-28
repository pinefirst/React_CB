import React from "react";
import Helmet from 'react-helmet';

import Page from "../../components/LayoutComponents/Page";
import FriendRequests from "./FriendRequests";

class FriendsPage extends React.Component{

  static defaultProps = {
    pathName:'FriendsPage',
    roles:['agent','administrator'],
  }

  render() {
    const props = this.props
    return(
      <Page {...props}>
        <Helmet title="FiendsPages" />
        <FriendRequests/>
      </Page>
    )
  }
}


export default FriendsPage;
