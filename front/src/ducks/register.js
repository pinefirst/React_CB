import {createReducer} from "redux-act";

import {message} from "antd";
import * as app from './app';


export const REDUCER = 'register';


export const subtmit = ({firstName, lastName, email, password}: {
  firstName:string, lastName:string, email:string, password:string
}) => (
  dispatch:Function,
    getState:Function,

)=>{
  dispatch(app.addSubmitForm(REDUCER));

  let isRegister = app.register(firstName, lastName, email, password, dispatch);

  if (isRegister) {
    dispatch(app.deleteSubmitForm(REDUCER));
  } else
    dispatch(app.deleteSubmitForm(REDUCER));

}


const initialState = {}
export default createReducer({}, initialState)
