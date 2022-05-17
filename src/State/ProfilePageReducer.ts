import {ActionTypes, PostsDataType, profilePageType} from './Store';
import {ChangeEvent} from 'react';

const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'
const ADD_POST = 'ADD-POST'

export const ProfilePageReducer = (state:profilePageType, action:ActionTypes) => {
    switch (action.type) {
        case ADD_POST:
            const newPost: PostsDataType = {
                id: '3',
                massage: state.NewPostText,
                likesCount: '0'
            };
            state.PostsData.push(newPost);
            state.NewPostText = '';
            return state;
        case UPDATE_NEW_POST_TEXT:
            state.NewPostText = action.newText;
            return state;
        default:
            return state;

    }
}

export type AddPostActionType = ReturnType<typeof addPostAC>
export const addPostAC = () => {
    return {
        type: 'ADD-POST'
    } as const
}
export type UpdateNewPostText = ReturnType<typeof updateNewPostTextAC>
export const updateNewPostTextAC = (event: ChangeEvent<HTMLTextAreaElement>) => {
    const text = event.currentTarget.value
    return {
        type: 'UPDATE-NEW-POST-TEXT',
        newText: text
    } as const
}