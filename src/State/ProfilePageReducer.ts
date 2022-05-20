import {ChangeEvent} from 'react';
import {ActionTypes} from './ReduxStore';


const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'
const ADD_POST = 'ADD-POST'

// export type profilePageType = {
//     PostsData: Array<PostsDataType>
//     NewPostText: string
// }
type PostsDataType = {
    id: string,
    massage: string,
    likesCount: string
}

const initialState={
    PostsData: [
        {id: '1', massage: 'Hi, how are you?', likesCount: '0'},
        {id: '2', massage: 'It\'s my first post', likesCount: '23'},
    ] as Array<PostsDataType>,
    NewPostText: '' as string
}

export type profilePageType=typeof initialState

export const ProfilePageReducer = (state=initialState, action:ActionTypes) => {
    switch (action.type) {
        case ADD_POST:
            state={...state}
            const newPost = {
                id: '3',
                massage: state.NewPostText,
                likesCount: '0'
            };
            state.PostsData.push(newPost);
            state.NewPostText = '';
            return state;
        case UPDATE_NEW_POST_TEXT:
            state={...state}
            state.NewPostText = action.newText;
            return state;
        default:
            state={...state}
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