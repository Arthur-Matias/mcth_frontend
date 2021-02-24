import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faFacebookF, faGithubAlt, faGoogle} from '@fortawesome/free-brands-svg-icons';
import {faEnvelope, faKey} from '@fortawesome/free-solid-svg-icons';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PrimaryButton from '../PrimaryButton';
import './styles.scss';
import mecathonLogo from '../../assets/mecathon.svg';

const RegisterForm = () => {

    
    const [category, setCategory] = useState('');
    const [userGender, setUserGender] = useState('');

    return (
        <div className="register-form-container">
            <div className="top-text">
                <b>REGISTRE-SE</b>
            </div>
            <div className="register-form-header">
                <div className="register-logo">
                    <img src={mecathonLogo} alt=""/>
                </div>
            </div>

            <form className="register-form">
                
                <div className="input-wrapper">
                    <label htmlFor="userFirstName">Primeiro Nome:</label>
                    <input type="text" name='userFirstName' />
                </div>
                
                <div className="input-wrapper">
                    <label htmlFor="userLastName">Sobrenome:</label>
                    <input type="text" name='userLastName' />
                </div>
                
                <div className="input-wrapper">
                    <label htmlFor="userEmail">Email:</label>
                    <input type="email" name='userEmail' />
                </div>
                
                <div className="input-wraper-father">
                    <div className="input-wrapper">
                        <label htmlFor="userPass">Senha:</label>
                        <input type="pass" name='userPass' />
                    </div>
                    <div className="input-wrapper">
                        <label htmlFor="userPassAgain">Digite novamente sua senha:</label>
                        <input type="pass" name='userPass' />
                    </div>
                </div>
                
                <div className="user-personal-info">
                
                    <div className="input-wraper-father">
                        <div className="input-wrapper">
                            <label htmlFor="birthDate">Data de nascimento:</label>
                            <input type="date" name='birthDate' />
                        </div>
                        <div className="input-wrapper">
                            <label htmlFor="userGender">Sexo:</label>
                            <select name="userGender" onChange={e=>setUserGender(e.target.value)} id="userGender">
                                <option id="userGender" value="m">Masculino</option>
                                <option id="userGender" value="f">Feminino</option>
                                <option id="userGender" value="other">LGBTQ+</option>
                                <option id="userGender" value="n/a">Prefiro não informar</option>
                            </select>
                        </div>
                    </div>
                    
                    <div className="input-wraper-father">
                        <div className="input-wrapper">
                            <label htmlFor="userCep">Cep:</label>
                            <input type="text" name='userCep' />
                        </div>
                        <div className="input-wrapper">
                            <label htmlFor="userPassAgain">Número para contato:</label>
                            <input type="pass" name='userPass' />
                        </div>
                    </div>

                    <div className="input-wrapper">
                    <label htmlFor="userCategory">Categoria:</label>
                        <select required name="userCategory" id="userCategory" onChange={e=>setCategory(e.target.value)}>
                            <option value="" defaultChecked>Selecione ...</option>
                            <option id="userCategory" value="comp">Competidor</option>
                            <option id="userCategory" value="mentor">Mentor</option>
                            <option id="userCategory" value="judge">Avaliador</option>
                        </select>
                    </div>
                </div>


            </form>
        </div>
    )
};

export default RegisterForm;