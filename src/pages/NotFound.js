import React from "react";
import { Link } from "react-router-dom";
import Menu1 from "../components/menu/Menu"
import { userIsAuthenticated } from "../redux/HOCs";
class NotFound extends React.Component {
  render() {
    return (
      <div>
        <Menu1 isAuthenticated={this.props.isAuthenticated}/>
      <div className="NotFound">
        
        <p>Page not found for {this.props.location.pathname}</p>
        <Link to="/">Go Home</Link>
      </div></div>
    );
  }
}

export default userIsAuthenticated(NotFound);
