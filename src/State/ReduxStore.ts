import {combineReducers, createStore} from 'redux';
import {AddPostActionType, ProfilePageReducer, UpdateNewPostText} from './ProfilePageReducer';
import {DialogsPageReducer, SendMessage, UpdateNewMessageBody} from './DialogsPageReducer';
import {FollowType, SetUsersType, UnfollowType, UsersPageReducer} from "./UsersPageReducer";

export type ActionTypes =
    AddPostActionType
    | UpdateNewPostText
    | UpdateNewMessageBody
    | SendMessage
    | FollowType
    | UnfollowType
    | SetUsersType


const rootReducer = combineReducers({
    ProfilePage: ProfilePageReducer,
    DialogsPage: DialogsPageReducer,
    UsersPage: UsersPageReducer
})

export type AppStateType = ReturnType<typeof rootReducer>

export const store = createStore(rootReducer);

// window.store=store;