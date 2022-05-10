import React from 'react';
import {PostsDataType, profilePageType} from '../../State/State';
// import s from './Profile.module.css';
import {MyPosts} from './MyPosts/MyPosts';
import {ProfileInfo} from './ProfileInfo/ProfileInfo';

type ProfileType={
    ProfilePage:profilePageType
    updateNewPostText:(newText:string)=>void
    addPost:()=>void

}

export const Profile = (props:ProfileType) => {
    return (
        <div>
            <ProfileInfo/>
            <MyPosts PostsData={props.ProfilePage.PostsData}
                     NewPostText={props.ProfilePage.NewPostText}
                     updateNewPostText={props.updateNewPostText}
                     addPost={props.addPost}/>
        </div>
    )
}