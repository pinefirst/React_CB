import React from 'react'
import Page from './../../../components/LayoutComponents/Page'
import Helmet from 'react-helmet'



class LoginPage extends React.Component {
  static defaultProps = {
    pathName: 'Login',
    roles: ['guest'],
  }
  render() {
    const { match, ...props } = this.props
    return (
      <Page {...props}>
        <Helmet title="Login" />
        <div>ddd</div>
      </Page>
    )
  }
}

export default LoginPage
