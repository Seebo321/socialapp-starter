import axios from "axios";
<<<<<<< HEAD
import { store } from "./redux"

=======
>>>>>>> 9a25519926c3b5d9a102cb4e986d8b5214db4352
class DataService {
  constructor(
    url = "https://socialapp-api.herokuapp.com",
    client = axios.create()
  ) {
    this.url = url;
    this.client = client;
  }
  registerUser(registrationData) {
    return this.client.post(this.url + "/users", registrationData);
    // get messages +/messages
  }
  getUsers() {
    return this.client.get(this.url + "/users?limit=10");
  }
  postLike(data) {
    const { token } = store.getState().auth.login.result
    console.log(data)
    return this.client.post(this.url + '/likes', data, {
      headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
      }
    }
  )
  }
  getMessages() {
    return this.client.get(this.url + "/messages?limit=10");
  }
  GetUserPicture(username) {
    return this.client.get(this.url + "/users/" + username + "/picture");
  }
  postMessage(data) {
    const { token } = JSON.parse(localStorage.getItem("login")).result;
    return fetch(this.url + "/messages", {
      method: "POST",
      headers: {
        Authorization: "Bearer " + token,
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(data),
    });
  }
    GetAUser(username){
        return this.client.get(this.url+'/users/'+username)
    }
    userPhoto(username) {
        this.client.get(this.url+"/users/" + username + "/picture")
        console.log(this.userPhoto)
    }

    // if this.likes.some()
    getToken () {
      const {token} =JSON.parse(localStorage.getItem("login")).result
      return console.log({token})
    }
    getUserName () {
      const {username} =JSON.parse(localStorage.getItem("login")).result
      return console.log({username})
    }
    UpdateUser(textdata,user){ 
      const {token} =JSON.parse(localStorage.getItem("login")).result
      return fetch(this.url + "/users/"+user, {
        method:"PATCH",
             headers: { Authorization: "Bearer " + token, 
          "Content-Type": "application/json",
        Accept: "application/json"},
            body: JSON.stringify(textdata)
      })}
}

export default DataService;
