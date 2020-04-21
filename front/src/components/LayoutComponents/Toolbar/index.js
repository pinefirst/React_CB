import React from "react";
import {Button} from "antd";

import './style.scss';
import ProfileMenu from "./ProfileMenu";

class Toolbar extends React.Component{

  render() {
    return(
      <div className="topbar">
        <div className="topbar__left" >

        </div>
        <div className="topbar__right" >
          <ProfileMenu/>
        </div>
      </div>
    )
  }
}


export default Toolbar;
