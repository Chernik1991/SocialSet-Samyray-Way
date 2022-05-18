import React, {ChangeEvent} from 'react';
import {addPostAC, updateNewPostTextAC} from '../../../State/ProfilePageReducer';
import {MyPosts} from './MyPosts';

type MyPostsType = {
    store:any
}
export const MyPostsContainer = (props: MyPostsType) => {

    const state=props.store.getState();
    const updateNewPostText = (newText: ChangeEvent<HTMLTextAreaElement>) => {
        props.store.dispatch(updateNewPostTextAC(newText))
    }
    const addPost = () => {
        props.store.dispatch(addPostAC())
    }
    return (
        <MyPosts
            PostsData={state.ProfilePage.PostsData}
            NewPostText={state.ProfilePage.NewPostText} updateNewPostText={updateNewPostText}
            addPost={addPost}
        />
    )
}
