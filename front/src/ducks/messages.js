import {FETCH_MESSAGES, DELETE_MESSAGE, ERROR_RESPONSE, UPDATE_MESSAGE, CREATE_MESSAGE} from "./types";
import {getData, postData, putData, deleteData} from "./index";


export function fetchMessages(payload) {

  let url = '/messages';
  const type = {
    actionType: FETCH_MESSAGES,
    errorType: ERROR_RESPONSE,
    loaderType: null,
  }
  if(payload){
    return dispatch => postData(type, true, url, dispatch, payload);
  }else {
    return dispatch => getData(type, true, url, dispatch);
  }
}


export function deleteMessage(id) {

  let url = '/messages/delete/' + id;
  const type = {
    actionType: FETCH_MESSAGES,
    errorType: ERROR_RESPONSE,
    loaderType: null,
  }
  return dispatch => deleteData(type, true, url, dispatch);
}


export function updateMessage(payload) {

  let url = '/messages/update/' + payload._id;
  const type = {
    actionType: FETCH_MESSAGES,
    errorType: ERROR_RESPONSE,
    loaderType: null,
  }
  return dispatch => putData(type, true, url, dispatch, payload);
}


export function createMessage(payload) {

  let url = '/messages/create';
  const type = {
    actionType: FETCH_MESSAGES,
    errorType: ERROR_RESPONSE,
    loaderType: null,
  }
  return dispatch => postData(type, true, url, dispatch, payload);
}
