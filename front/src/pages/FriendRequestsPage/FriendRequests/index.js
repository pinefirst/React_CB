import React from "react";
import connect from "react-redux/es/connect/connect";

import FriendRequestsFilter from "../../pageComponents/FriendRequests/FriendRequestsFilter";
import FriendRequestsTable from "../../pageComponents/FriendRequests/FriendRequestsTable";
import {fetchFriendRequests, deleteFriendRequest, updateFriendRequest, createFriendRequest} from "../../../ducks/friendrequests";


const mapStateToProps = (state, props) => ({
  friendrequests: state.friendrequests.friendrequests,
  // user: state.user.profile,
})

const mapDispatchToProps = (dispatch, props) => ({
  fetchFriendRequests:(payload) => dispatch(fetchFriendRequests(payload)),
  deleteFriendRequest:(id) => dispatch(deleteFriendRequest(id)),
  updateFriendRequest:(payload) => dispatch(updateFriendRequest(payload)),
  createFriendRequest:(payload) => dispatch(createFriendRequest(payload)),
})

@connect(mapStateToProps , mapDispatchToProps)


class FriendRequests extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      isUser:false,
      feedbackAnalysisDate:[],
      orderAnalysisDate:[],
      mode:['month', 'month'],
    }
  }


  componentDidMount() {
    let {fetchFriendRequests} = this.props;
    fetchFriendRequests();
  }


  render() {
    let {friendrequests,deleteFriendRequest,updateFriendRequest,createFriendRequest} = this.props
    return(
      <div>
        <FriendRequestsFilter apiFn={this.props.fetchFriendRequests} />
        <FriendRequestsTable
          friendrequests={friendrequests}
          deleteFriendRequest = {deleteFriendRequest}
          updateFriendRequest = {updateFriendRequest}
          createFriendRequest = {createFriendRequest}
        />
      </div>


    )
  }
}


export default FriendRequests;
