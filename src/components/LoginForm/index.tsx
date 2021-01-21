import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faFacebookF, faGithubAlt, faGoogle} from '@fortawesome/free-brands-svg-icons';
import {faEnvelope, faKey} from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import { Link } from 'react-router-dom';
import PrimaryButton from '../PrimaryButton';
import './styles.scss';

const LoginForm = () => {
    return (
        <div className="login-form-container">
            <div className="login-wrapper">
                <h3>
                    <b>Entre com</b>
                </h3>
                <div className="social-login">
                    <div className="social-icon-container">
                        <FontAwesomeIcon icon={faGoogle} />
                    </div>
                    <div className="social-icon-container">
                        <FontAwesomeIcon icon={faFacebookF} />
                    </div>
                    <div className="social-icon-container">
                        <FontAwesomeIcon icon={faGithubAlt} />
                        
                    </div>
                </div>
                <p className='orText'>ou</p>
                <form className='login-form'>
                    <div className="common-login">
                    <div className="login-input-wrapper">
                        <span className="input-icon-container" ><FontAwesomeIcon icon={faEnvelope} /></span>
                        <input type="email" id="userMail" placeholder="E-mail" />
                    </div>
                    <div className="login-input-wrapper">
                        <span className="input-icon-container"><FontAwesomeIcon icon={faKey} /></span>
                        <input type="password" id="userPass" placeholder="Senha" />
                    </div>
                    </div>
                    <div className="form-button">
                        <PrimaryButton text='Entrar' ></PrimaryButton>
                    </div>

                    <p style={{marginBottom:'0.5rem'}} >ou</p>
                    <Link to='/registro'>Registre-se</Link>
                </form>
            </div>
        </div>
    )
};

export default LoginForm;

