import React from 'react';
import s from './ProfileInfo.module.css';
import {Preloader} from '../../common/Preloader';
import {profilePageType} from '../../../State/ProfilePageReducer';

 export const ProfileInfo = (props:profilePageType) => {
     if (!props.Profile){
         return <Preloader/>
     }
     return (
        <div>
            <div>
                <img
                    src="https://images.pexels.com/photos/248797/pexels-photo-248797.jpeg?auto=compress&cs=tinysrgb&h=350" alt=""/>
            </div>
            <div className={s.descriptionBlock}>
                ava + description

                <img src={props.Profile.photos.large} alt={''}/>
            </div>
        </div>
    )
}
