import React from 'react';
// import s from './Profile.module.css';
import {MyPosts} from './MyPosts/MyPosts';
import {ProfileInfo} from './ProfileInfo/ProfileInfo';
import {MassagesData, MassagesDataType} from '../../index';

type ProfileType={
    MassagesData:Array<MassagesDataType>
}

export const Profile = (props:ProfileType) => {
    return (
        <div>
            <ProfileInfo/>
            <MyPosts MassagesData={MassagesData}/>
        </div>
    )
}