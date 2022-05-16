import {ChangeEvent} from 'react';

const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'
const ADD_POST = 'ADD-POST'
const UPDATE_NEW_MASSAGE_BODY = 'UPDATE-NEW-MASSAGE-BODY'
const SEND_MESSAGE = 'SEND-MESSAGE'
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

type AddPostActionType = ReturnType<typeof addPostAC>
export const addPostAC = () => {
    return {
        type: 'ADD-POST'
    } as const
}
type UpdateNewPostText = ReturnType<typeof updateNewPostTextAC>

export const updateNewPostTextAC = (event: ChangeEvent<HTMLTextAreaElement>) => {
    const text = event.currentTarget.value
    return {
        type: 'UPDATE-NEW-POST-TEXT',
        newText: text
    } as const
}
type UpdateNewMessageBody = ReturnType<typeof UpdateNewMessageBodyAC>

export const UpdateNewMessageBodyAC = (event: ChangeEvent<HTMLTextAreaElement>) => {
    const body = event.currentTarget.value
    return {
        type: 'UPDATE-NEW-MASSAGE-BODY',
        body: body
    } as const
}
type SendMessage = ReturnType<typeof SendMessageAC>

export const SendMessageAC = () => {
    return {
        type: 'SEND-MESSAGE',
    } as const
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
        if (action.type === ADD_POST) {
            const newPost: PostsDataType = {
                id: '3',
                massage: this._State.ProfilePage.NewPostText,
                likesCount: '0'
            };
            this._State.ProfilePage.PostsData.push(newPost);
            this._State.ProfilePage.NewPostText = '';
            this._callSubscriber();
        } else if (action.type === UPDATE_NEW_POST_TEXT) {
            this._State.ProfilePage.NewPostText = action.newText;
            this._callSubscriber();
        } else if (action.type === UPDATE_NEW_MASSAGE_BODY) {
            this._State.DialogsPage.NewMassageBody = action.body;
            this._callSubscriber()
        } else if (action.type === SEND_MESSAGE) {
            let body = this._State.DialogsPage.NewMassageBody;
            this._State.DialogsPage.NewMassageBody = ''
            this._State.DialogsPage.DialogsMassagesData.push({id: '4', message: body})
            this._callSubscriber()
        }
    }

}