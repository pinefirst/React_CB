import {FETCH_FRIENDREQUESTS, ERROR_RESPONSE, DELETE_FRIENDREQUESTS, UPDATE_FRIENDREQUESTS, CREATE_FRIENDREQUESTS} from "../ducks/types";


const INITIAL_STATE = { profile: {}, message: '', error: '', friendrequests: []};

export default function (state=INITIAL_STATE, action) {
  switch (action.type) {
    case FETCH_FRIENDREQUESTS:
      return {...state, friendrequests: action.payload.friendrequests};
    case DELETE_FRIENDREQUESTS:
      return {...state, friendrequests: action.payload.friendrequests};
    case UPDATE_FRIENDREQUESTS:
      return {...state, friendrequests: action.payload.friendrequests};
    case CREATE_FRIENDREQUESTS:
      return {...state, friendrequests: action.payload.friendrequests};
    case ERROR_RESPONSE:
      return {...state, friendrequests: action.payload.friendrequests};
    default:
  }
  return state;
}
