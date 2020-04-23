import {FETCH_CONSOLES, ERROR_RESPONSE, DELETE_CONSOLE, CREATE_CONSOLE, UPDATE_CONSOLE} from "../ducks/types";

const INITIAL_STATE = {error:'', consoles:[]};

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case FETCH_CONSOLES:
      return {...state, consoles: action.payload.consoles};
    case ERROR_RESPONSE:
      return {...state, consoles: action.payload.consoles};
    case DELETE_CONSOLE:
      return {...state, consoles: action.payload.consoles};
    case CREATE_CONSOLE:
      return {...state, consoles: action.payload.consoles};
    case UPDATE_CONSOLE:
      return {...state, consoles: action.payload.consoles};
    default:
  }
  return state;
}
