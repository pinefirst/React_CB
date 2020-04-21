import React from "react";
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {isEmpty} from 'lodash';

import {setUpdatingContent} from "../../../ducks/app";

const mapStateToProps = (state, props) => ({
  isUpdatingContent: state.app.isUpdatingContent,
})


@connect(mapStateToProps)

class AppContent extends React.Component{
  static contextTypes = {
    getContentBuffer: PropTypes.func,
  }


  shouldComponentUpdate(nextProps : {isUpdatingContent : boolean}, nextState, nextContext) {
    if (this.props.isUpdatingContent && !nextProps.isUpdatingContent){
      return false;
    }
    return  true;
  }


  componentDidMount() {
    const {isUpdatingContent, dispatch} = this.props;
    if (isUpdatingContent){
      dispatch(setUpdatingContent(false))
    }
  }


  render() {
    const {getContentBuffer} = this.context;
    const {pathName, content} = getContentBuffer();
    return isEmpty(content)?(
      <div className="utils__loadingPage" />
    ):(
      <div className="utils__content" >
        {content}
      </div>
    )
  }
}


export default AppContent;
