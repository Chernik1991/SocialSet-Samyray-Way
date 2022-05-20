import {combineReducers, createStore} from 'redux';
import {AddPostActionType, ProfilePageReducer, UpdateNewPostText} from './ProfilePageReducer';
import {DialogsPageReducer, SendMessage, UpdateNewMessageBody} from './DialogsPageReducer';

export type ActionTypes = AddPostActionType | UpdateNewPostText | UpdateNewMessageBody | SendMessage


const rootReducer=combineReducers({
    ProfilePage:ProfilePageReducer,
    DialogsPage:DialogsPageReducer
})

export type AppStateType=ReturnType<typeof rootReducer>

export const store = createStore(rootReducer);
