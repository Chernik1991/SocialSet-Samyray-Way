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
export type ActiondTypes=AddPostActionType|UpdateNewPostText
type AddPostActionType= {
    type: 'ADD-POST'
}
type UpdateNewPostText= {
    type:'UPDATE-NEW-POST-TEXT',
    newText:string
}
export type storeType = {
    _State: StateType,
    _callSabscriber: () => void,

    subscriber: (observer: () => void) => void,
    getState: () => StateType,

    // addPost: () => void,
    // updateNewPostText: (newText: string) => void,

    dispatch:(action:ActiondTypes)=>void
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
        }
    },
    _callSabscriber() {
    },

    subscriber(observer) {
        this._callSabscriber = observer
    },
    getState() {
        return this._State
    },

    // updateNewPostText(newText: string) {
    //     this._State.ProfilePage.NewPostText = newText
    //     this._callSabscriber();
    // },
    // addPost() {
    //     const newPost: PostsDataType = {
    //         id: '3',
    //         massage: this._State.ProfilePage.NewPostText,
    //         likesCount: '0'
    //     };
    //     this._State.ProfilePage.PostsData.push(newPost)
    //     this._State.ProfilePage.NewPostText = ''
    //     this._callSabscriber();
    // },
    dispatch(action) {
        if (action.type === 'ADD-POST') {
            const newPost: PostsDataType = {
                id: '3',
                massage: this._State.ProfilePage.NewPostText,
                likesCount: '0'
            };
            this._State.ProfilePage.PostsData.push(newPost)
            this._State.ProfilePage.NewPostText = ''
            this._callSabscriber();
        } else if (action.type === 'UPDATE-NEW-POST-TEXT') {
            this._State.ProfilePage.NewPostText = action.newText
            this._callSabscriber();
        }
    }

}