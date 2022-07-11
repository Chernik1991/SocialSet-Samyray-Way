import React from 'react';
import {ProfileInfo} from './ProfileInfo/ProfileInfo';
import {MyPostsContainer} from './MyPosts/MyPostsContainer';
import {mapStateToProps} from './ProfileContainer';

export const Profile = (props:mapStateToProps) => {
    return (
        <div>
            <ProfileInfo Profile={props.Profile} isAuth={props.isAuth}/>
            <MyPostsContainer/>
        </div>
    )
}