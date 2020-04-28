import React from "react";
import Helmet from 'react-helmet';

import Page from "../../components/LayoutComponents/Page";


class FriendsPage extends React.Component{

  static defaultProps = {
    pathName:'FriendsPage',
    roles:['agent','administrator'],
  }

  render() {
    return(
      <Page>
        <Helmet title="FiendsPages" />
        <div>dddddd</div>
      </Page>
    )
  }
}


export default FriendsPage;
