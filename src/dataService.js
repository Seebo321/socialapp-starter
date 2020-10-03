import axios from "axios";
import { store } from "./redux"

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
    return this.client.get(this.url + "/users?limit=40");
  }
  getAMessage(messageId) {
    return this.client.get(this.url + "/messages/" + messageId)
  }
  postLike(data1) {
    const {token} =JSON.parse(localStorage.getItem("login")).result
    console.log(data1)
    const likedata={
      "messageId":data1
    }
    return fetch(this.url + "/likes", {
      method: "POST",
      headers: {
        Authorization: "Bearer " + token,
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(likedata),
    });
   
  }
  getUsername() {
    const loginData = JSON.parse(localStorage.getItem("login"))
    const {username, token} = loginData.result
    return username
  }
  getMessages() {
    return  this.client.get(this.url + "/messages?limit=10");
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
  GetAUser(username) {
    return this.client.get(this.url + "/users/" + username);
  }
  userPhoto(username) {
    this.client.get(this.url + "/users/" + username + "/picture");
    console.log(this.userPhoto);
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



      UpdatePicture(formdata){ 
        const {token} =JSON.parse(localStorage.getItem("login")).result
        const {username} =JSON.parse(localStorage.getItem("login")).result
        console.log(formdata)
        return this.client.put(this.url + "/users/"+username+'/picture',formdata, {
          method:"PUT",
               headers: { Authorization: "Bearer " + token, 
            "Content-Type": "multipart/form-data",
          Accept: "application/json"},
    
        })}
        
        
        
        
   
}
        
       


export default DataService;
