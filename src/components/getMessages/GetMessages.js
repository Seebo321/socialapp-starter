
import React, { Component } from "react";
import { setInterval } from "timers";
import DataService from "../../dataService";


class GetMessage extends Component {
  constructor(props) {
    super(props);
    this.client = new DataService();
    this.state = {
      data: 0,
      likecount: 0,
      like: 0,
    };
  }

  getAllMessages() {
    console.log(this.state.data);
    return this.client.getMessages().then((result) => {
      this.setState({
        data: result,
      });
   
    });
  }
  forMessages(item) {
    document.getElementById("test").innerHTML +=
      "usernanme says " + item.text + "<br>";
  }

  handlelike(){
    const {username} =JSON.parse(localStorage.getItem("login")).result
    console.log(this.state.like)
    if(this.state.like===username){
      alert('already liked this message and cant unlike XP')
    }else{
      console.log(this.state.likeID)
      this.client.postLike(this.state.likeID)
      .then(
        this.setState({likecount: this.state.likecount +1})
      ).then(result=>{this.getAllMessages()})
    }
  }
  likes = (e) => {
    this.client.getAMessage(e.target.id).then(result => {console.log(result.data)
    this.setState({like:result.data.message.likes,
      likeID: result.data.message.id  
    })
      
    this.handlelike()
    })
  }

  componentDidMount() {
    this.getAllMessages();
    setInterval(() => {
      this.getAllMessages();
    }, 3000);
  }

  render() {
    if (this.state.data === 0)
      return (
        <div>
          <h1>loading</h1>
        </div>
      );
    console.log(this.state.data.data.messages);
    
    return (
      <div>
        <div>
          <ul>
            {this.state.data.data.messages.map((messageObject) => (
              <li key={messageObject.id}>
               
                <div className="messageboard">
                  <h2 className="username">{messageObject.username}</h2> <br />{" "}
                  <p className="message">{messageObject.text}</p>

                  
                  <button id={messageObject.id} onClick={this.likes}>Like &#128151; {messageObject.likes.length}</button>

                </div>
              </li>
            ))}
          </ul>
        </div>
        <div id="test"></div>
      </div>
    );
  }
}
export default GetMessage;
