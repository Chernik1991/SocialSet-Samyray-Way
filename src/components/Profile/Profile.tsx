import React from 'react';
import {ActionTypes, profilePageType} from '../../State/Store';
// import s from './Profile.module.css';
import {MyPosts} from './MyPosts/MyPosts';
import {ProfileInfo} from './ProfileInfo/ProfileInfo';

type ProfileType={
    ProfilePage:profilePageType
    dispatch:(type:ActionTypes)=>void

}

export const Profile = (props:ProfileType) => {
    return (
        <div>
            <ProfileInfo/>
            <MyPosts PostsData={props.ProfilePage.PostsData}
                     NewPostText={props.ProfilePage.NewPostText}
                     dispatch={props.dispatch}/>
        </div>
    )
}