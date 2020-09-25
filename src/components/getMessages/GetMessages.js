import React from "react";
import DataService from "../../dataService";

class GetMessage extends React.Component {
  constructor(props) {
    super(props);
    this.client = new DataService();
    this.state = {
      data: 0,
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
      "Username says " + item.text + "<br>";
  }
  componentDidMount() {
    this.getAllMessages();
  }
  likes = (event) => {
    let like = this.state.like
    let likedMessage = { messageId: Number(event.target.id) }
    return this.client.postLike(likedMessage).then((res) => {
      console.log(res)
      this.setState({ like: like + 1 })
    })
  }

  render() {
    if (this.state.data === 0)
      return (
        <div>
          <h1>loading</h1>
        </div>
      );
    // console.log(this.state.data.data.messages[0].text);
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
                  <button onClick={this.likes}>Like</button>
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
