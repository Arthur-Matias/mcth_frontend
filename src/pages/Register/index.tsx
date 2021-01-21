import React from 'react';
import RegisterForm from '../../components/RegisterForm';
import SideMenu from '../../components/SideMenu';
import './styles.scss';

const Register = ()=>{
    return(
        <>
            <div className="register-container">
                <SideMenu items={['home', 'login','registro','ajuda']} />

                <RegisterForm />
            </div>
        </>
    )
}

export default Register;