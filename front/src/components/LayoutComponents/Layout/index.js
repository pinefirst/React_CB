import React from "react";
import PropType from 'prop-types';
import {Spinner} from "react-redux-spinner";
import {BackTop, Layout as AntLayout} from "antd";
import {enquireScreen, unenquireScreen} from "enquire-js/index";
import {ContainerQuery} from "react-container-query";
import className from 'classnames';

import Routes from '../../../routes';
import Content from '../../../components/LayoutComponents/Content';

const AntContent = AntLayout.Content;
const AntHeader = AntLayout.Header;
const AntFooter  = AntLayout.Footer;

const query = {
  'screen-xs': {
    maxWidth: 575,
  },
  'screen-sm': {
    minWidth: 576,
    maxWidth: 767,
  },
  'screen-md': {
    minWidth: 768,
    maxWidth: 991,
  },
  'screen-lg': {
    minWidth: 992,
    maxWidth: 1199,
  },
  'screen-xl': {
    minWidth: 1200,
    maxWidth: 1599,
  },
  'screen-xxl': {
    minWidth: 1600,
  },
}

let isMobile
enquireScreen(b => {
  isMobile = b;
})

let contentBuffer = {
  pathName:null,
  content:null,
}


class Layout extends React.Component{
  static childContextTypes = {
    getContentBuffer:PropType.func,
    setContentBuffer:PropType.func,
  }

  state = {
    isMobile,
  }

  getChildContext(){
    return{
      getContentBuffer: () => contentBuffer,
      setContentBuffer: ({pathName, content}) => (contentBuffer = {pathName, content}),
    }
  }


  componentDidMount() {
    this.enquireHandler = enquireScreen(mobile => {
      this.setState({
        isMobile:mobile
      })
    })
  }


  componentWillUnmount() {
    unenquireScreen(this.enquireHandler)
  }


  render() {
    const isMobile = !!this.state.isMobile;
    return(
      <ContainerQuery query={query}>
        {params => (
          <div className={className(params)} >
            <Routes/>
            <Content/>
          </div>
        )}
      </ContainerQuery>
    )
  }
}

export default Layout
