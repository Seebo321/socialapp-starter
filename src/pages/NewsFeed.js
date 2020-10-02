import React from "react";
import { Link } from "react-router-dom";
import Menu1 from "../components/menu/Menu"
import Menu from "../components/menu/Menu";
import DataService from "../dataService";
import GetMessages from "../components/getMessages/GetMessages";
import { Layout, Breadcrumb } from 'antd';
import { userIsAuthenticated } from "../redux/HOCs";
class NewsFeed extends React.Component {
  client = new DataService();
  state = { messages: [] };

  componentDidMount() {
    this.client
      .getMessages()
      .then((response) => this.setState({ messages: response.data.messages }));
  }
  handleLogout = (event) => {
    event.preventDefault();
    this.props.logout();
  };
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
         
    <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
      <div className="logo" />
      <Menu1 isAuthenticated={this.props.isAuthenticated} />
    </Header>
    <Content className="site-layout" style={{ padding: '0 50px', marginTop: 64 }}>
      <Breadcrumb style={{ margin: '16px 0' }}>
      <h1>Timeline</h1>
        <GetMessages />
        

      </Breadcrumb>
      <div className="site-layout-background" style={{ padding: 24, minHeight: 380 }}>
        Content
      </div>
    </Content>
    <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
  </Layout>
  


        
      </div>
      );

      
  }
}


export default NewsFeed;
