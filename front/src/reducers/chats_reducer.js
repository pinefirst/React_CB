import { FETCH_CHATS, ERROR_RESPONSE, DELETE_CHAT, UPDATE_CHAT, CREATE_CHAT } from '../ducks/types';

const INITIAL_STATE = {  error: '', chats: []};

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case FETCH_CHATS:
      return { ...state, chats: action.payload.chats };
    case DELETE_CHAT:
      return {...state, chats: action.payload.chats};
    case UPDATE_CHAT:
      return {...state, chats: action.payload.chats};
    case CREATE_CHAT:
      return {...state, chats: action.payload.chats};
    case ERROR_RESPONSE:
      return { ...state, error: action.payload };
    default:
    // do nothing
  }

  return state;
}
