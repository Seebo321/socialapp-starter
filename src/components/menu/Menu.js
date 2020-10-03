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
        <h1 className="multicolortext">Mix & Mingle</h1>
        {this.props.isAuthenticated && (
          <div id="menu-links">

            <Link to="/">Profile</Link>
            <Link to="/messagefeed">NewsFeed</Link>
            <Link to="/userfeed">Users</Link>
            <Link to="/" onClick={this.handleLogout}>
              Logout
            </Link>

          </div>
        )}
      </div>
    );
  }
}

export default withAsyncAction("auth", "logout")(Menu1);
