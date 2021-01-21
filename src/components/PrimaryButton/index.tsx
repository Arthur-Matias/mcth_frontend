import React from 'react';
import './styles.scss';

interface ButtonInterface{
    isOrange?:boolean;
    text: string
}

const PrimaryButton:React.FC<ButtonInterface> = ({
    text,
    isOrange,
})=>{
    return(
        <div className={isOrange?'orange primary-btn': 'primary-btn'}>
            {text}
        </div>
    )
};

export default PrimaryButton;