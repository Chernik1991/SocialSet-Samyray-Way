import React from 'react';
import s from './ProfileInfo.module.css';

 export const ProfileInfo = () => {
    return (
        <div>
            <div>
                <img
                    src="https://images.pexels.com/photos/248797/pexels-photo-248797.jpeg?auto=compress&cs=tinysrgb&h=350" alt=""/>
            </div>
            <div className={s.discriptionBlock}>
                ava + description
            </div>
        </div>
    )
}