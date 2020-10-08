import React from "react";
import Spinner from "react-spinkit";
import { withAsyncAction } from "../../redux/HOCs";
import "./LoginForm.css";

import { Link } from "react-router-dom";


class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
    };
  }

  handleLogin = (e) => {
    e.preventDefault();
    this.props.login(this.state);
    
  };

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    const layout = {
      labelCol: { span: 8 },
      wrapperCol: { span: 16 },
    };
    const tailLayout = {
      wrapperCol: { offset: 8, span: 16 },
    };
      const { loading, error } = this.props;
      return (
        <div className='centerd'>
        <div className="LoginForm">
          <form id="login-form" onSubmit={this.handleLogin}> 
             <label htmlFor="username">Username</label> 
            <input
              type="text"
              name="username"
              autoFocus
              required
              onChange={this.handleChange}
            /> 
             <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              required
              onChange={this.handleChange}
            /> 
              <button type="submit" disabled={loading}>
              Login
          </button>  
           <Link to="/register"><p>Register</p></Link>
           </form> 
           {loading && <Spinner name="circle" color="blue" />}
          {error && <p style={{ color: "red" }}>{error.message}</p>}
    
         
  
    
        </div></div>
      );
    }
  }


    export default withAsyncAction("auth", "login")(LoginForm);
