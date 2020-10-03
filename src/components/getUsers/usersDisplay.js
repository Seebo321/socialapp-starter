import React from 'react';
import DataService from "../../dataService"
import Menu1 from "../menu/Menu"
import { userIsAuthenticated } from "../../redux/HOCs";



class UserDisplay extends React.Component {

  constructor(props) {
    super(props)
    this.client = new DataService();
    this.state = {

     data: {},
    mount:0


    }
  }
  gettheuser() {
    return this.client.GetAUser(this.props.name).then(result => {
      
      this.setState({
        userinfo: result.data.user
      })
      this.getthepicture(this.props.name)
      
      this.setState({
        mount:1
      })
    })
    
  }

  getthepicture(){
    return this.client.GetUserPicture(this.state.userinfo.username).then(result => { 
      this.setState({
        picture: result.config.url,
        mount:1

      })
     
    })
    
  }

  
componentDidMount(){
  this.gettheuser()
  
 
}
    render() {
     
      if(this.state.mount===0)
      return(<div><h1>loading</h1></div>);
    
   
    return(
      <div className="Profile"><Menu1 isAuthenticated={this.props.isAuthenticated}/>
       <div className='centerd'>
    <h1>hello, I am {this.state.userinfo.displayName}</h1>
        < img 
        height='200'
        width='200'
        src={this.state.picture} alt=''/>
        <h3>About me:
           <br/>
           {this.state.userinfo.about}
        </h3></div>
        </div>
    )
  }
}
export default userIsAuthenticated(UserDisplay);