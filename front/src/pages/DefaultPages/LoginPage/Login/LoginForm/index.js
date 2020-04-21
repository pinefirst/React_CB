import React from "react";
import {connect} from 'react-redux';
import {Link} from "react-router-dom";
import {Form,Input, Button, Checkbox} from "antd";

const FormItem = Form.Item;


class LoginForm extends React.Component{
  static defaultProps = {};


  render() {
    return(
      <Link to="/auth/register" className="width-100 ant-btn width-140 ant-btn-primary float-right"  style={{lineHeight:'30px'}}>
        Sign Up
      </Link>
    )
  }
}


export default LoginForm;
