import React from 'react';
import {ProfileInfo} from './ProfileInfo/ProfileInfo';
import {MyPostsContainer} from './MyPosts/MyPostsContainer';
import {profilePageType} from '../../State/ProfilePageReducer';
import {mapStateToProps} from './ProfileContainer';

export const Profile = (props:mapStateToProps) => {
    return (
        <div>
            <ProfileInfo Profile={props.Profile}/>
            <MyPostsContainer/>
        </div>
    )
}