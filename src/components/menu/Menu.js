import React from "react";
import { Link } from "react-router-dom";
import "./Menu.css";
import { withAsyncAction } from "../../redux/HOCs";
import { Layout, Menu, Breadcrumb } from 'antd';

class Menu1 extends React.Component {
  handleLogout = (event) => {
    event.preventDefault();
    this.props.logout();
  };

  render() {
    return (
      <div className="Menu">
        <h1>Mix & Mingle</h1>
        {this.props.isAuthenticated && (
          <div id="menu-links">


             <div style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
      <div className="logo" />
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
        <Menu.Item key="1"><Link to='/'>Profile</Link></Menu.Item>
        <Menu.Item key="2"><Link to='/messagefeed'>Message Feed</Link></Menu.Item>
        <Menu.Item key="3"><Link to='/userfeed'>userfeed</Link></Menu.Item>
        <Menu.Item key="4"><a onClick={this.handleLogout}>Logout</a></Menu.Item>
      </Menu>
    </div>
          </div>
        )}
      </div>
    );
  }
}

export default withAsyncAction("auth", "logout")(Menu1);
