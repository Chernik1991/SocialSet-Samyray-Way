import {ChangeEvent} from 'react';
import {ActionTypes} from './ReduxStore';
import {profileAPI} from '../api/API';


const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT'
const ADD_POST = 'ADD_POST'
const SET_USERS_PROFILE = 'SET_USERS_PROFILE'

type PostsDataType = {
    id: string,
    massage: string,
    likesCount: string
}

export type photosType = {
    photos: { small: string, large: string }
}
const initialState = {
    PostsData: [
        {id: '1', massage: 'Hi, how are you?', likesCount: '0'},
        {id: '2', massage: 'It\'s my first post', likesCount: '23'},
    ] as Array<PostsDataType>,
    NewPostText: '' as string,
    Profile: '' as any
}

export type profilePageType = typeof initialState

export const ProfilePageReducer = (state = initialState, action: ActionTypes) => {
    switch (action.type) {
        case ADD_POST:
            const newPost = {
                id: '3',
                massage: state.NewPostText,
                likesCount: '0'
            };
            return {
                ...state,
                PostsData: [...state.PostsData, newPost],
                NewPostText: '',
            }
        case UPDATE_NEW_POST_TEXT:
            return {
                ...state,
                NewPostText: action.newText
            }
        case SET_USERS_PROFILE:
            return {
                ...state,
                Profile: action.profile
            }
        default:
            return {...state};

    }
}

export type AddPostActionType = ReturnType<typeof addPost>
export const addPost = () => {
    return {
        type: 'ADD_POST'
    } as const
}
export type UpdateNewPostText = ReturnType<typeof updateNewPostText>
export const updateNewPostText = (event: ChangeEvent<HTMLTextAreaElement>) => {
    const text = event.currentTarget.value
    return {
        type: 'UPDATE_NEW_POST_TEXT',
        newText: text
    } as const
}
export type SetUsersProfile = ReturnType<typeof setUsersProfile>
export const setUsersProfile = (profile: photosType) => {
    return {
        type: 'SET_USERS_PROFILE',
        profile: profile
    } as const
}
export const getUsersProfile = (userID: string) => (dispatch: any) => {
    profileAPI.getProfile(userID).then(data => {
        dispatch(setUsersProfile(data))
    })
}