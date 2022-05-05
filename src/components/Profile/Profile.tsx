import React from 'react';
import { PostsDataType } from '../../State/State';
// import s from './Profile.module.css';
import {MyPosts} from './MyPosts/MyPosts';
import {ProfileInfo} from './ProfileInfo/ProfileInfo';

type ProfileType={
    PostsData:Array<PostsDataType>
}

export const Profile = (props:ProfileType) => {
    return (
        <div>
            <ProfileInfo/>
            <MyPosts PostsData={props.PostsData}/>
        </div>
    )
}