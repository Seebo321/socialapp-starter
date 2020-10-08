import React from "react";
import Menu from "../components/menu/Menu";
import RegistrationForm from "../components/RegistrationForm/RegistrationForm";
import { Layout } from "antd";
import { Link } from "react-router-dom";

class Register extends React.Component {
    render() {
        const { Footer } = Layout;

        return (
            <div className="Home">
                <Menu />
                <RegistrationForm />
                <div className='closingdiv'><Link to="/"><p className='close'>Close</p></Link></div>
                <Footer style={{ textAlign: "center" }}>
                    Mix&Mingle
                </Footer>
            </div>
        );
    }
}

export default Register;
