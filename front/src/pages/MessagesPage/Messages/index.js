import React from "react";


import MessagesFilter from "../../pageComponents/Messages/MessagesFilter";
import MessagesTable from "../../pageComponents/Messages/MessagesTable";
import {fetchMessages, updateMessage, createMessage, deleteMessage} from "../../../ducks/messages";


class Messages extends React.Component{


  render() {
    return(
      <div>
        <MessagesFilter/>
        <MessagesTable/>
      </div>
    )
  }
}


export default Messages;
