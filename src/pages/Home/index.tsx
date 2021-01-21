import React from 'react';
import { Link } from 'react-router-dom';
import mainteanceSvg from '../../assets/mainteance.svg'
import PrimaryButton from '../../components/PrimaryButton';
import './styles.scss';

const Home = ()=>{
    return(
        <div className="home-container">
            <div className="home-section">
                <h2>Bem vindo ao <br/><b>MECHATON</b> <br/> o primero hackaton do curso de Engenharia Mecânica da UFPR</h2>
                <Link to='/login'>
                    <PrimaryButton text="entrar" isOrange={true}/>
                </Link>
                <p className='m-t'>ou</p>
                <Link to='/registro'>
                    <b onClick={()=>console.log('Clicked register button on Homepage')}>Registre-se</b>
                </Link>
            </div>
            
            
            
            

            <div className="home-section">
                <img src={mainteanceSvg} alt="A man and a woman dressed like workers on a construction working together with a bunch of gears on colors Dark gray and Orange"/>
            </div>
        </div>
    )
}

export default Home;