import React from 'react';
import mainteanceSvg from '../../assets/mainteance.svg'
import PrimaryButton from '../../components/PrimaryButton';
import './styles.scss';

const Home = ()=>{
    return(
        <div className="home-container">
            <div className="home-section">
                <h2>Bem vindo ao <b>MECHATON</b> o primero hackaton do curso de Engenharia Mecânica da UFPR</h2>
                <PrimaryButton text="entrar" isOrange={true}/>
                <p className='m-t'>ou</p>
                <p><b onClick={()=>console.log('Clicked register button on Homepage')}>Registre-se</b></p>
            </div>
            
            <div className="home-section">
                <img src={mainteanceSvg} alt="A man and a woman dressed like workers on a construction working together with a bunch of gears on colors Dark gray and Orange"/>
            </div>
        </div>
    )
}

export default Home;