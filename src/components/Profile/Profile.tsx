import React from 'react';
import {ProfileInfo} from './ProfileInfo/ProfileInfo';
import {MyPostsContainer} from './MyPosts/MyPostsContainer';
import {profilePageType} from '../../State/ProfilePageReducer';

export const Profile = (props:profilePageType) => {
    return (
        <div>
            <ProfileInfo Profile={props.Profile} PostsData={[]} NewPostText={''}/>
            <MyPostsContainer/>
        </div>
    )
}