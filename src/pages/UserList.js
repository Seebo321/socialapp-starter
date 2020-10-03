import React from "react";
import { Link } from "react-router-dom";
import Menu1 from "../components/menu/Menu";
import DataService from "../dataService";
import { Layout, Menu, Breadcrumb } from 'antd';
import UserData from "../components/getUsers/getUsers";
import { userIsAuthenticated } from "../redux/HOCs";
class UserFeed extends React.Component {
  client = new DataService();
  state = { messages: [] };

  componentDidMount() {
    this.client
      .getMessages()
      .then((response) => this.setState({ messages: response.data.messages }));
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
       
        <Layout>
   
    <Content className="site-layout" style={{ padding: '0 50px', marginTop: 10 }}>
    <Menu1 isAuthenticated={this.props.isAuthenticated}/>
    <div className='centerd'><h1>Users</h1></div>
        <UserData/>
      <Breadcrumb style={{ margin: '16px 0' }}>
        <Breadcrumb.Item><Link to='/'>Home</Link></Breadcrumb.Item>
        <Breadcrumb.Item><Link to="/userfeed">Users</Link></Breadcrumb.Item>
        <Breadcrumb.Item><Link to="/messagefeed">NewsFeed</Link></Breadcrumb.Item>
      </Breadcrumb>
    </Content>
    
  </Layout>
  


        
      </div>
      );

      
  }
}


export default userIsAuthenticated(UserFeed);
