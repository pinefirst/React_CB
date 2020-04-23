import {FETCH_CONSOLES, DELETE_CONSOLE, ERROR_RESPONSE, UPDATE_CONSOLE, CREATE_CONSOLE} from "./types";
import {getData, postData, putData, deleteData} from "./index";

export function fetchConsoles(payload) {
  let url = '/consoles';
  const type = {
    actionType: FETCH_CONSOLES,
    errorType:ERROR_RESPONSE,
    loaderType:null,
  }

  if(payload){
    return dispatch => postData(type, true,url, dispatch, payload);
  }else {
    return dispatch => getData(type,true, url,dispatch)
  }
}


export function deleteConsole(id) {

  let url = '/consoles/delete/' + id;
  const type = {
    actionType: FETCH_CONSOLES,
    errorType:ERROR_RESPONSE,
    loaderType:null,
  }

  return dispatch => deleteData(type, true, url, dispatch);
}


export function updateConsole(payload) {

  let url = '/consoles/update/' + payload._id;
  const type = {
    actionType: FETCH_CONSOLES,
    errorType:ERROR_RESPONSE,
    loaderType:null,
  }
  return dispatch => putData(type, true, url, dispatch,payload);
}


export function createConsole(payload) {

  let url = '/consoles/create';
  const type = {
    actionType: FETCH_CONSOLES,
    errorType:ERROR_RESPONSE,
    loaderType:null,
  }
  return dispatch => postData(type, true, url, dispatch, payload);
}
