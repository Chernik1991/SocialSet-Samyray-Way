import {combineReducers, createStore} from 'redux';
import {AddPostActionType, ProfilePageReducer, SetUsersProfile, UpdateNewPostText} from './ProfilePageReducer';
import {DialogsPageReducer, SendMessage, UpdateNewMessageBody} from './DialogsPageReducer';
import {
    FollowType,
    SetCurrentPageType, SetIsFetching,
    SetTotalUsersCount,
    SetUsersType,
    UnfollowType,
    UsersPageReducer
} from "./UsersPageReducer";

export type ActionTypes =
    AddPostActionType
    | UpdateNewPostText
    | SetUsersProfile
    | UpdateNewMessageBody
    | SendMessage
    | FollowType
    | UnfollowType
    | SetUsersType
    | SetCurrentPageType
    | SetTotalUsersCount
    | SetIsFetching


const rootReducer = combineReducers({
    ProfilePage: ProfilePageReducer,
    DialogsPage: DialogsPageReducer,
    UsersPage: UsersPageReducer
})

export type AppStateType = ReturnType<typeof rootReducer>

export const store = createStore(rootReducer);

// window.store=store;