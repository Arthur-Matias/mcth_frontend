import React, { useState } from 'react';
import SideMenuItem from '../SideMenuItem';
import './styles.scss';

interface SideMenuItemsInterface{
    items: string[];
}
const SideMenuItems:React.FC<SideMenuItemsInterface> = ({
    items
})=>{
    
    return(
        <>
            <div className="side-menu">
                <div className="side-menu-header">

                </div>
                <div className="side-menu-body">
                    <select name="side-menu-items" id="side-menu-items">
                    {items.map((e,i)=>{
                        return <SideMenuItem key={i} title={e} />
                    })}
                    </select>
                </div>
            </div>
        </>
    )
    
}

export default SideMenuItems;