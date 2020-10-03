import React from "react";
import Spinner from "react-spinkit";
import { withAsyncAction } from "../../redux/HOCs";
import "./LoginForm.css";




class LoginForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      username: "",
      password: ""
    };
  }

  handleLogin = e => {
    e.preventDefault();
    this.props.login(this.state);
    console.log ('tried to log in ')
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  checklogin = e => {

    console.log ('button works')
  }

  render() {
    const layout = {
      labelCol: { span: 8 },
      wrapperCol: { span: 16 },
    };
    const tailLayout = {
      wrapperCol: { offset: 8, span: 16 },
    };

    const Demo = () => {
      const onFinish = values => {
        console.log('Success:', values);
      };
    }
      const onFinishFailed = errorInfo => {
        console.log('Failed:', errorInfo);
      };
      const { loading, error } = this.props;
      return (
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
           </form> 
           {loading && <Spinner name="circle" color="blue" />}
          {error && <p style={{ color: "red" }}>{error.message}</p>}
    
   
  
    
        </div>
      );
    }
  }


    export default withAsyncAction("auth", "login")(LoginForm);
