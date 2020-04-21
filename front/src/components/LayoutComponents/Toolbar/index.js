import React from "react";
import {Button} from "antd";

import './style.scss';

class Toolbar extends React.Component{

  render() {
    return(
      <div className="topbar">
        <div className="topbar__left" >

        </div>
        <div className="topbar__right" >
          Toolbar
        </div>
      </div>
    )
  }
}


export default Toolbar;
