import React from "react";
import Helmet from 'react-helmet';

import Page from "../../../components/LayoutComponents/Page";
import Login from "./Login";

class LoginPage extends React.Component{

  static defaultProps = {
    pathName:'Login',
    roles:['guest'],
  }

  render() {
    const {match, ...props} = this.props;
    return(
      <Page {...props} >
        <Helmet title="Login" />
        <Login/>
      </Page>
    )
  }
}

export default LoginPage;
