import React from "react";
import LoginForm from "../components/loginForm/LoginForm";
// import Menu from "../components/menu/Menu";
import { userIsNotAuthenticated } from "../redux/HOCs";
import RegistrationForm from "../components/RegistrationForm/RegistrationForm"
import { Layout, Menu, Breadcrumb } from 'antd';



class Home extends React.Component {

  render() {
    const { Header, Content, Footer } = Layout;
    

    return (
      <div className="Home">
        {/* <Menu /> */}
        {/* <h2>Your favorite microblogging platform</h2> */}
        {/* <LoginForm /> */}
        {/* <RegistrationForm /> */
        
        }
        test etst
        
        <Layout className="layout">
    <Header>
      <div className="logo" />
      <Menu theme="dark" mode='horizontal' defaultSelectedKeys={['2']}>
        <Menu.Item key="1">News</Menu.Item>
        <Menu.Item key="2">Events</Menu.Item>
        <Menu.Item key="3">Login</Menu.Item>

      </Menu>
    </Header>
    <Content style={{ padding: '0 50px' }}>
      <Breadcrumb style={{ margin: '16px 0' }}>
        <Breadcrumb.Item> User</Breadcrumb.Item>
        <Breadcrumb.Item>Register</Breadcrumb.Item>
        <Breadcrumb.Item>Contact</Breadcrumb.Item>
      </Breadcrumb>
      <div className="site-layout-content">
      
      <h2>Your favorite microblogging platform</h2>
      <Menu />
      <LoginForm /> 
      <RegistrationForm />

      </div>
    </Content>
    <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
  </Layout>
      </div>
    );

  }

}


export default userIsNotAuthenticated(Home);
