import React from "react";
import { Link } from "react-router-dom";
import "./Menu.css";
import { withAsyncAction } from "../../redux/HOCs";
import {Menu } from 'antd';

class Menu1 extends React.Component {
  handleLogout = (event) => {
    event.preventDefault();
    this.props.logout();
  };

  render() {
    return (
      <div className="Menu">
        <div className='fullwidth'><h1 className="multicolortext">Mix & Mingle</h1></div>

        {this.props.isAuthenticated && (
          <div id="menu-links">
            <div className='fullwidth'>
     
      <Menu theme="dark" mode="horizontal" >
        <Menu.Item key="1"><Link to='/'>Profile</Link></Menu.Item>
        <Menu.Item key="2"><Link to="/messagefeed">NewsFeed</Link></Menu.Item>
        <Menu.Item key="3"><Link to="/userfeed">Users</Link></Menu.Item>
        <Menu.Item key="4"><Link to="/" onClick={this.handleLogout}>
            Logout
          </Link></Menu.Item>
      </Menu>
    </div>
          </div>
        )}
      </div>
    );
  }
}

export default withAsyncAction("auth", "logout")(Menu1);
