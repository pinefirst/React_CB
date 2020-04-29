import {FETCH_MESSAGES, ERROR_RESPONSE, DELETE_MESSAGE, UPDATE_MESSAGE, CREATE_MESSAGE} from "../ducks/types";

const INITIAL_STATE = {  error: '', messages: []};

export default function (state=INITIAL_STATE, action) {
  switch (action.type) {
    case FETCH_MESSAGES:
      return  {...state, messages: action.payload.messages}
    case DELETE_MESSAGE:
      return {...state, messages: action.payload.messages}
    case UPDATE_MESSAGE:
      return  {...state, messages: action.payload.messages}
    case CREATE_MESSAGE:
      return {...state, messages: action.payload.messages}
    case ERROR_RESPONSE:
      return {...state, error: action.payload};
    default:
  }
  return state;
}

