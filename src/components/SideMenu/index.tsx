import React, { useState } from 'react';
import './styles.scss';
import logoM from '../../assets/m-logo.svg'
import mecathonLogo from '../../assets/mecathon.svg'

import { NavLink } from 'react-router-dom';

interface SideMenuInterface{
    isOrange?:boolean;
    items: string[];
}

interface SideMenuItemInterface{
    title: string;
}

const SideMenu:React.FC<SideMenuInterface> = ({
    items,
})=>{

    const [isOpen, setOpen] = useState(false);

    function handleMouseHover(){
        setOpen(!isOpen);
    }



    const SideMenuItem:React.FC  <SideMenuItemInterface> = ({
        title
    })=>{

        return(
            <>
                <NavLink to={`/${title}`} activeClassName ="activeLink" className="side-menu-item" >
                    <p>{title}</p>
                </NavLink>
            </>
        )
        
    }

    const SideMenuOpen = ()=>{
        return(
            <>
                <div className="side-menu open">
                    <div className="side-menu-header">
                        <img style={{width: '10rem'}} src={mecathonLogo} alt="mecathon with soft shadows on bue and orange"/>
                    </div>
                    <div className="side-menu-body">
                        <div className="side-menu-items">
                            {items.map((element, i) => {
                                return (
                                    <div className="item-wrapper">
                                        <SideMenuItem key={i} title={element} />
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </>
        )
        
    }
    const SideMenuClosed = ()=>{
        return(
            <>
                    <div className="side-menu" style={{paddingTop: '1rem'}}>
                        <img className="logo closed" style={{width: '5rem'}} src={logoM} alt="letter 'm' with a soft shadow on the colors blue and orange "/>
                    </div>
            </>
        )
        
    }

    return(
        <div className={isOpen?"side-menu-container open":"side-menu-container"} onMouseLeave={handleMouseHover} onMouseEnter={handleMouseHover}>
            <div className="teste"></div>
            {isOpen?<SideMenuOpen />:<SideMenuClosed />}
        </div>
    )
};

export default SideMenu;