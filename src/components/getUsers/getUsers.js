import React from "react";
import { Link } from "react-router-dom";
import DataService from "../../dataService";

class UserData extends React.Component {


  //set our initial state and set up our service as this.client on this component
  constructor(props) {
    super(props)
    this.client = new DataService();
    this.state = {
      users: [],
    }
    this.client.getUsers().then(res => {
      this.setState({ users: res.data.users }) 
    })
  }

  render() {
    if (this.state.users === [])
      return (
        <div>


          <h1>loading</h1></div>
      )
    return (
      <div>
        {this.state.users.map(user =>
          
          <div className='users'><h3 key={user.username}>
           <Link to={{
              pathname: "/user/" + user.username,
              state: { fromDashboard: true }
            }}
              onClick={() =>
                this.client.GetAUser(user.username).then(res => { console.log(res) })
              }
            ><p className='centerd' id='users'>Click here for <br/>{user.displayName}</p>
            </Link>
          </h3></div>)}

      </div>
    )

  }
}
export default UserData