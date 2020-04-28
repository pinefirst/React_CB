import {combineReducers} from "redux";
import {routerReducer} from "react-router-redux";
import {pendingTasksReducer} from "react-redux-spinner";
import cookie from 'react-cookie';
import {notification, message} from "antd";
import axios from 'axios';

import app, {logout} from "./app";
import consoleReducer from '../reducers/consoles_reducer';
import chatReducer from '../reducers/chats_reducer';

import {
  STATIC_ERROR,
  FETCH_USER,
  API_URL,
  CLIENT_ROOT_URL,
  Content_URL,
  FETCH_GAMES,
  ERROR_RESPONSE,
} from './types';


function dispatchLoader(dispatch, loaderType, bool) {
  if (loaderType){
    dispatch({
      type:loaderType,
      payload:bool,
    });
  }
}

export default combineReducers({
  routing:routerReducer,
  pendingTasks:pendingTasksReducer,

  app,
  consoles:consoleReducer,
  chats:chatReducer,

});


export function postData(type, isAuthReq, url, dispatch, data) {
  const {actionType,errorType, loaderType} = type;
  dispatchLoader(dispatch, loaderType,true);
  const requestUrl = API_URL + url;
  let headers = {};

  if (isAuthReq){
    const aToken = cookie.load('token');
    if (!aToken){
      return dispatch(logout())
    }
    var myHeaders = new Headers({
      Authorization : aToken,
      "Content-Type": "application/json",
    });
  }

  fetch(requestUrl, {
    method:"POST",
    headers:myHeaders,
    body:JSON.stringify(data),
  })
    .then((response => response.json()))
    .then((response) => {
      console.log("first : ", response);
      dispatch({
        type:actionType,
        payload: response,
      });
      dispatchLoader(dispatch,loaderType, false);
    })
    .catch((error) => {
      dispatchLoader(dispatch, loaderType, false);
      errorHandler(dispatch, error.response, errorType);
      message.warning('Warning : ID already exists.');
    })
}


export function getData(type, isAuthReq, url, dispatch) {
  const {actionType, errorType, loaderType} = type;
  dispatchLoader(dispatch, loaderType, true);
  const requestUrl  = API_URL + url;
  let headers = {};
  if (isAuthReq){
    const aToken = cookie.load('token');
    if (!aToken){
      return dispatch(logout());
    }
    headers = {headers : {Authorization : aToken}};
  }

  axios.get(requestUrl, headers)
    .then((response) => {
      dispatch({
        type:actionType,
        payload:response.data,
      });
      dispatchLoader(dispatch,loaderType,false);
    })
    .catch((error) => {
      errorHandler(dispatch, error.response, errorType);
      dispatchLoader(dispatch, loaderType, false);
    });
}


export function putData(type, isAuthReq, url, dispatch, data) {
  const {actionType, errorType, loaderType} = type;
  let  headers = {};
  const requestUrl = API_URL + url;

  if (isAuthReq){
    const aToken = cookie.load('token');
    if (!aToken)
      return dispatch(logout());
    headers = {headers:{Authorization: aToken }};
  }

  axios.put(requestUrl, data,headers)
    .then((response) => {
      dispatch({
        type:actionType,
        payload:response.data,
      });
    })
    .catch((error) => {
      errorHandler(dispatch, error.response, errorType);
    });
}


export function deleteData(type, isAuthReq, url, dispatch) {
  const {actionType, errorType, loaderType} = type;
  const requestUrl = API_URL + url;
  let headers = {};

  if (isAuthReq){
    const aToken = cookie.load('token');
    if (!aToken){
      return dispatch(logout());
    }
    headers = { headers: { Authorization: aToken } };
  }

  axios.delete(requestUrl, headers)
    .then((response) => {
      dispatch({
        type:actionType,
        payload:response.data,
      });
    })
    .catch((error) => {
      errorHandler(dispatch, error.response, errorType);
    });
}


export function errorHandler(dispatch, response, typ) {

}
