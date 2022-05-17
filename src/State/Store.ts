import {AddPostActionType, ProfilePageReducer, UpdateNewPostText} from './ProfilePageReducer';
import {DialogsPageReducer, SendMessage, UpdateNewMessageBody} from './DialogsPageReducer';

export type StateType = {
    ProfilePage: profilePageType,
    DialogsPage: messagesPageType
}
export type profilePageType = {
    PostsData: Array<PostsDataType>
    NewPostText: string
}
export type messagesPageType = {
    DialogsData: Array<DialogsDataType>
    DialogsMassagesData: Array<DialogsMassagesDataType>
    NewMassageBody: string
}
export type PostsDataType = {
    id: string,
    massage: string,
    likesCount: string
}
export type DialogsDataType = {
    id: string,
    name: string
}
export type DialogsMassagesDataType = {
    id: string,
    message: string
}
export type ActionTypes = AddPostActionType | UpdateNewPostText | UpdateNewMessageBody | SendMessage

export type storeType = {
    _State: StateType,
    _callSubscriber: () => void,

    subscriber: (observer: () => void) => void,
    getState: () => StateType,

    // addPost: () => void,
    // updateNewPostText: (newText: string) => void,

    dispatch: (action: ActionTypes) => void
}
export const store: storeType = {
    _State: {
        ProfilePage: {
            PostsData: [
                {id: '1', massage: 'Hi, how are you?', likesCount: '0'},
                {id: '2', massage: 'It\'s my first post', likesCount: '23'},
            ],
            NewPostText: ''
        },
        DialogsPage: {
            DialogsData: [
                {id: '1', name: 'Dimychc'},
                {id: '2', name: 'Andrey'},
                {id: '3', name: 'Sveta'},
                {id: '4', name: 'Victor'},
                {id: '5', name: 'Valera'}
            ],
            DialogsMassagesData: [
                {id: '1', message: 'Hi'},
                {id: '2', message: 'Hi 2'},
                {id: '3', message: 'Hi Hi Hi'}
            ],
            NewMassageBody: ''
        }
    },
    _callSubscriber() {
    },

    subscriber(observer) {
        this._callSubscriber = observer
    },
    getState() {
        return this._State
    },
    dispatch(action) {
        this._State.ProfilePage=ProfilePageReducer(this._State.ProfilePage, action)
        this._State.DialogsPage=DialogsPageReducer(this._State.DialogsPage, action)
        this._callSubscriber()
    }

}