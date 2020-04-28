import { FETCH_GAMES, ERROR_RESPONSE, DELETE_GAME, UPDATE_GAME, CREATE_GAME } from './../ducks/types';

const INITIAL_STATE = { profile: {}, message: '', error: '', games: []};

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case FETCH_GAMES:
      return { ...state, games: action.payload.games };
    case DELETE_GAME:
      return {...state, games: action.payload.games};
    case UPDATE_GAME:
      return {...state, games: action.payload.games};
    case CREATE_GAME:
      return {...state, games: action.payload.games};
    case ERROR_RESPONSE:
      return { ...state, error: action.payload };
    default:
    // do nothing
  }

  return state;
}
