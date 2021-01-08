import React from 'react';
import mainteanceSvg from '../../assets/mainteance.svg'
import PrimaryButton from '../../components/PrimaryButton';
import './styles.scss';

const Home = ()=>{
    return(
        <div className="home-container">
            <div className="home-section">
                <h2>Bem vindo ao <h1>MECHATON</h1> o primero hackaton do curso de Engenharia Mecânica da UFPR</h2>
                <PrimaryButton text="entrar" isOrange={true}/>
            </div>
            
            <div className="home-section">
                <img src={mainteanceSvg} alt="A man and a woman dressed like workers on a construction working together with a bunch of gears on colors Dark gray and Orange"/>
            </div>
        </div>
    )
}

export default Home;