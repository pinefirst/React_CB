import { FETCH_FRIENDREQUESTS, DELETE_FRIENDREQUESTS, ERROR_RESPONSE, UPDATE_FRIENDREQUESTS, CREATE_FRIENDREQUESTS } from './types';

// for crud operation
import { getData, postData, putData, deleteData } from './index';

export function fetchFriendRequests(payload) {
  let url = '/friendrequests';
  const type = {
    actionType: FETCH_FRIENDREQUESTS,
    errorType: ERROR_RESPONSE,
    loaderType: null,
  }
  if(payload){
    return dispatch => postData(type, true, url, dispatch, payload)
  }else{
    return dispatch => getData(type, true, url, dispatch)
  }
}

export function deleteFriendRequest(id){
  let url = '/friendrequests/delete/' + id
  const type = {
    actionType: DELETE_FRIENDREQUESTS,
    errorType: ERROR_RESPONSE,
    loaderType: null,
  }
  return dispatch => deleteData(type, true, url, dispatch);
}

export function updateFriendRequest(payload){
  let url = '/friendrequests/update/' + payload._id;
  const type = {
    actionType: UPDATE_FRIENDREQUESTS,
    errorType: ERROR_RESPONSE,
    loaderType: null,
  }
  return dispatch => putData(type, true, url, dispatch, payload);
}
export function createFriendRequest(payload){
  let url = '/friendrequests/create';
  const type = {
    actionType: CREATE_FRIENDREQUESTS,
    errorType: ERROR_RESPONSE,
    loaderType: null,
  }
  return dispatch => postData(type, true, url, dispatch, payload);
}
