import React, { useState } from 'react';
import './styles.scss';

interface SideMenuItemInterface{
    title: string;
}

const SideMenuItem:React.FC<SideMenuItemInterface> = ({
    title
})=>{

    return(
        <>
            <select name="SideMenuItem" id="SideMenuItem">
                <option value={title}>{title}</option>
            </select>
        </>
    )
};

export default SideMenuItem;