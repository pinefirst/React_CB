import {
  FETCH_FRIENDREQUESTS,
  DELETE_FRIENDREQUESTS,
  UPDATE_FRIENDREQUESTS,
  CREATE_FRIENDREQUESTS,
  ERROR_RESPONSE
} from "./types";
import {getData, postData, putData, deleteData} from "./index";


export function fetchFriendRequests(payload) {

  let url = '/friendrequests';
  const type = {
    actionType:FETCH_FRIENDREQUESTS,
    errorType:ERROR_RESPONSE,
    loaderType:null,
  }
  if(payload){
    return dispatch => postData(type, true, url, dispatch, payload);
  }else {
    return dispatch => getData(type, true, url, dispatch);
  }
}


export function deleteFriendRequest(id) {

  let url = '/friendrequests/delete/' + id;
  const type = {
    actionType:FETCH_FRIENDREQUESTS,
    errorType:ERROR_RESPONSE,
    loaderType:null,
  }
  return dispatch => deleteData(type, true, url, dispatch);
}


export function updateFriendRequest(payload) {

  let url = '/friendrequests/update/' + payload._id;
  const type = {
    actionType:FETCH_FRIENDREQUESTS,
    errorType:ERROR_RESPONSE,
    loaderType:null,
  }
  return dispatch => putData(type, true, url, payload);
}


export function createFriendRequest(payload) {

  let url = '/friendrequests/create';
  const type = {
    actionType:FETCH_FRIENDREQUESTS,
    errorType:ERROR_RESPONSE,
    loaderType:null,
  }
  return dispatch => postData(type, true, url, dispatch, payload);
}
