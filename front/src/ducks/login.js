import {createReducer} from "redux-act";
import * as app from './app';
import {message} from "antd";
import {notification} from "antd";

export const REDUCER = 'login';


export const submit = ({username, password} : {username:string, password:string}) => (
  dispatch:Function,
  getState:Function,
) => {
  dispatch(app.addSubmitForm(REDUCER));


}


const initialState = {}
export default createReducer({}, initialState)
