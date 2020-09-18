import React from "react";
import Menu from "../components/menu/Menu";
import { userIsAuthenticated } from "../redux/HOCs";
import userData from "../components/getUsers/getUsers"
class Profile extends React.Component {
  render() {
    console.log(this.props)
    return (
      <div className="Profile">
        <Menu isAuthenticated={this.props.isAuthenticated} />
        <h2>Profile</h2>
        <userData/>
      </div>
    );
  }
}

export default userIsAuthenticated(Profile);
