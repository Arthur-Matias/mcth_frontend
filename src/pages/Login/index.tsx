import React from 'react';
import LoginForm from '../../components/LoginForm';
import SideMenu from '../../components/SideMenu';
import './styles.scss';

const Login = ()=>{
    return(
        <>
            <div className="login-container">
                <SideMenu items={['home', 'login','registro','ajuda']} />

                <LoginForm />
            </div>
        </>
    )
}

export default Login;