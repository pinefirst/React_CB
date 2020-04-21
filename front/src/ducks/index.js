import {combineReducers} from "redux";
import {routerReducer} from "react-router-redux";
import {pendingTasksReducer} from "react-redux-spinner";
import app from "./app";


import cookie from 'react-cookie';
import {notification, message} from "antd";
import axios from 'axios';
import {STATIC_ERROR, FETCH_USER, API_URL, CLIENT_ROOT_URL, Content_URL, FETCH_GAMES, ERROR_RESPONSE} from './types';


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
})
