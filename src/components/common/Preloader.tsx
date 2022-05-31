import preloader from '../../assets/images/Gear-0.1s-224px.svg';
import React from 'react';

export const Preloader=()=>{
    return(
        <div style={{backgroundColor:'white'}}>
            <img src={preloader} alt={''}/>
        </div>
    )
}