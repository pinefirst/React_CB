import {FETCH_GAMES, DELETE_GAME, ERROR_RESPONSE, UPDATE_GAME, CREATE_GAME} from "./types";
import {getData, postData , putData, deleteData, getFromContentful} from "./index";


export function fetchGames(payload) {
  let url = '/games';
  const type = {
    actionType: FETCH_GAMES,
    errorType: ERROR_RESPONSE,
    loaderType: null,
  }
  if(payload){
    return dispatch => postData(type, true, url, dispatch, payload);
  }else {
    return dispatch => getData(type, true, url, dispatch)
  }
}


export function getGamesFromContentful() {
  let url = '/syncgames';
  const type = {
    actionType: FETCH_GAMES,
    errorType: ERROR_RESPONSE,
    loaderType: null,
  }
  return dispatch => getFromContentful(type, true, url, dispatch);
}


export function deleteGame(id) {
  let url = '/games/delete' + id;
  const type = {
    actionType: FETCH_GAMES,
    errorType: ERROR_RESPONSE,
    loaderType: null,
  }
  return dispatch => deleteData(type, true, url, dispatch);
}


export function updateGame(payload) {
  let url ='/games/update/' + payload._id;
  const type = {
    actionType: FETCH_GAMES,
    errorType: ERROR_RESPONSE,
    loaderType: null,
  }
  return dispatch => putData(type, true, url, dispatch, payload);
}


export function createGame(payload) {

  let url = '/games/create';
  const type = {
    actionType: FETCH_GAMES,
    errorType: ERROR_RESPONSE,
    loaderType: null,
  }
  return dispatch => postData(type, true, url, dispatch, payload);
}


