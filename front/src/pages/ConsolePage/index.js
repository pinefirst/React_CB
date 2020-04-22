import React from "react";
import Page from "../../components/LayoutComponents/Page";
import Helmet from 'react-helmet';

import Consoles from "./Console";

class ConsolePages extends React.Component{

  static defaultProps = {
    pathName:'Consoles',
    roles: ['agent', 'administrator'],
  }


  render() {
    const props = this.props
    return(
      <Page {...props}>
        <Helmet title="ConsoleTable" />
        <Consoles/>
      </Page>
    )
  }
}


export default ConsolePages;
