import React from "react";
import Menu1 from "../components/menu/Menu";
import { userIsAuthenticated } from "../redux/HOCs";
import UserProfile from "../components/UpdateUser/UserProfile"
class Profile extends React.Component {
  render() {
    if (this.props === null)
      return (<div><h1>loading</h1></div>)

    return (
      <div className="Profile">

        <div className="profile2">
          <Menu1 isAuthenticated={this.props.isAuthenticated} />
          <UserProfile
            name={this.props.match.params.username} />
        
        
        </div>

      </div>
    );
  }
}

export default userIsAuthenticated(Profile);
