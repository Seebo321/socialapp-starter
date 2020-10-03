import React from "react";
import { Link } from "react-router-dom";
import Menu1 from "../components/menu/Menu";
import DataService from "../dataService";
import { Layout, Menu, Breadcrumb } from 'antd';
import UserData from "../components/getUsers/getUsers";
import { withAsyncAction } from "../redux/HOCs"
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
        <Menu1 />
        <div id="menu-links">
          <Link to="/">Home</Link>         
        </div>
        

        <Layout>
    <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
      <div className="logo" />
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
        <Menu.Item key="1">Profile</Menu.Item>
        <Menu.Item key="2">Logout</Menu.Item>
        <Link to="/" >
            Logout
          </Link>
        <Menu.Item key="3">nav 3</Menu.Item>
      </Menu>
    </Header>
    <Content className="site-layout" style={{ padding: '0 50px', marginTop: 64 }}>
      
    <h1>Users</h1>
        <UserData/>
      <Breadcrumb style={{ margin: '16px 0' }}>
        <Breadcrumb.Item>Home</Breadcrumb.Item>
        <Breadcrumb.Item>List</Breadcrumb.Item>
        <Breadcrumb.Item>App</Breadcrumb.Item>
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


export default UserFeed;