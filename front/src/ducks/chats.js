import { FETCH_CHATS, DELETE_CHAT, ERROR_RESPONSE, UPDATE_CHAT, CREATE_CHAT } from './types';

// for crud operation
import { getData, postData, putData, deleteData } from './index';

export function fetchChats(payload) {
  let url = '/chats';
  const type = {
    actionType: FETCH_CHATS,
    errorType: ERROR_RESPONSE,
    loaderType: null,
  }
  if(payload){
    return dispatch => postData(type, true, url, dispatch, payload)
  }else{
    return dispatch => getData(type, true, url, dispatch)
  }
}

export function deleteChat(id){
  let url = '/chats/delete/' + id
  const type = {
    actionType: DELETE_CHAT,
    errorType: ERROR_RESPONSE,
    loaderType: null,
  }
  return dispatch => deleteData(type, true, url, dispatch);
}

export function updateChat(payload){
  let url = '/chats/update/' + payload._id;
  const type = {
    actionType: UPDATE_CHAT,
    errorType: ERROR_RESPONSE,
    loaderType: null,
  }
  return dispatch => putData(type, true, url, dispatch, payload);
}
export function createChat(payload){
  let url = '/chats/create';
  const type = {
    actionType: CREATE_CHAT,
    errorType: ERROR_RESPONSE,
    loaderType: null,
  }
  return dispatch => postData(type, true, url, dispatch, payload);
}
