import React, { Component } from "react";
import { setInterval } from "timers";
import DataService from "../../dataService";


class GetMessage extends Component {
  constructor(props) {
    super(props);
    this.client = new DataService();
    this.state = {
      data: 0,
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
 

 
  componentDidMount() {
    this.getAllMessages()
 
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
                {" "}
                <div className="messageContainer">
                  <h1 className="username">{messageObject.username}</h1> <br />{" "}
                  <p className="message">{messageObject.text}</p>
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
