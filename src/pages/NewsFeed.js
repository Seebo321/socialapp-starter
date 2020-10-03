import React from "react";
import { userIsAuthenticated } from "../redux/HOCs";
import Menu1 from "../components/menu/Menu"
import { Link } from "react-router-dom";
import DataService from "../dataService";
import GetMessages from "../components/getMessages/GetMessages";
import { Layout, Breadcrumb } from "antd";
import Message from "../components/message/Message";

class NewsFeed extends React.Component {
  client = new DataService();
  state = { messages: [] };

  componentDidMount() {
    this.client
      .getMessages()
      .then((response) => this.setState({ messages: response.data.messages }));
  }
  componentWillUnmount() {
    //this.timer=null
  }
  render() {
    const { Header, Content, Footer } = Layout;
    if (this.state.messages.length === 0) {
  
      return (
        <div className="NewsFeed">
          <h1>Timeline</h1>
          <ul></ul>
          <h3>LOADING...</h3>
        </div>
      );
    }
    return (
      <div className="NewsFeed">

        
  

        
         
            
        
          <Content
            className="site-layout"
            style={{ padding: "0 50px", marginTop: 10 }}
          ><Menu1 isAuthenticated={this.props.isAuthenticated}/>
            
              
              <div className='centerd'><h1 id='heading'>Timeline</h1>
              <Message /></div>
              
              <GetMessages />
              <Breadcrumb style={{ margin: '16px 0' }}>
        <Breadcrumb.Item><Link to='/'>Home</Link></Breadcrumb.Item>
        <Breadcrumb.Item><Link to="/userfeed">Users</Link></Breadcrumb.Item>
        <Breadcrumb.Item><Link to="/messagefeed">NewsFeed</Link></Breadcrumb.Item>
      </Breadcrumb>
            
          </Content>
        
      </div>
    );
  }
}

export default userIsAuthenticated(NewsFeed);
