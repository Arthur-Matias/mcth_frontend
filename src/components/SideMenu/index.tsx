import React, { useState } from 'react';
import './styles.scss';
import LogoM from '../../assets/m-logo.svg'

interface SideMenuInterface{
    isOrange?:boolean;
    items: string[];
}

interface SideMenuItemInterface{
    title: string;
}

const SideMenu:React.FC<SideMenuInterface> = ({
    items,
    isOrange
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
                <div className="side-menu-item">
                    {title}
                </div>
            </>
        )
        
    }

    const SideMenuOpen = ()=>{
        return(
            <>
                <div className="side-menu">
                    <div className="side-menu-header">

                    </div>
                    <div className="side-menu-body">
                        <select name="side-menu-items" id="side-menu-items">
                            {items.map((element, i) => {
                                return <SideMenuItem key={i} title={element} />
                            })}
                        </select>
                    </div>
                </div>
            </>
        )
        
    }
    const SideMenuClosed = ()=>{
        return(
            <>
                <div className="side-menu">
                    <img className="logo closed" src={LogoM} alt="letter 'm' with a soft shadow on the colors blue and orange "/>
                </div>
            </>
        )
        
    }

    return(
        <div className={isOpen?"side-menu-container open":"side-menu-container"} onMouseLeave={handleMouseHover} onMouseEnter={handleMouseHover}>
            {isOpen?<SideMenuOpen />:<SideMenuClosed />}
        </div>
    )
};

export default SideMenu;