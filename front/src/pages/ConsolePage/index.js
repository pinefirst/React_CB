import React from "react";
import Page from "../../components/LayoutComponents/Page";
import Helmet from 'react-helmet';


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
        <di>ConsolePage</di>
      </Page>
    )
  }
}


export default ConsolePages;
