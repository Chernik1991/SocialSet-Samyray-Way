import React, {ChangeEvent} from 'react';
import {addPostAC, updateNewPostTextAC} from '../../../State/ProfilePageReducer';
import { StoreContext } from '../../../StoreContext';
import {MyPosts} from './MyPosts';

export const MyPostsContainer = () => {
       return (
        <StoreContext.Consumer>
            {(store)=>{
            const state = store.getState();
            const updateNewPostText = (newText: ChangeEvent<HTMLTextAreaElement>) => {
                store.dispatch(updateNewPostTextAC(newText))
            }
            const addPost = () => {
                store.dispatch(addPostAC())
            }

            return(
                <MyPosts
                    PostsData={state.ProfilePage.PostsData}
                    NewPostText={state.ProfilePage.NewPostText} updateNewPostText={updateNewPostText}
                    addPost={addPost}
                />)
        }}
        </StoreContext.Consumer>
    )
}
