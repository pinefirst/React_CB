import React from "react";
import Helmet from 'react-helmet';

import Page from "../../../components/LayoutComponents/Page";
import Games from "./Games";



class GamesPage extends React.Component{

  static defaultProps = {
    pathName:"Games",
    roles:['agent', 'administrator'],
  }


  render() {
    const props = this.props
    return(
      <Page {...props}>
        <Helmet title="GamesPage" />
        <Games/>
      </Page>
    )
  }
}


export default GamesPage;
