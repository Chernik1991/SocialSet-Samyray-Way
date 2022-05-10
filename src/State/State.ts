let rerenderEntireTree=()=>{

}

export type StateType = {
    ProfilePage: profilePageType,
    DialogsPage: messagesPageType
}
export type profilePageType = {
    PostsData: Array<PostsDataType>
    NewPostText:string
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
export let State: StateType = {
    ProfilePage: {
        PostsData: [
            {id: '1', massage: 'Hi, how are you?', likesCount: '0'},
            {id: '2', massage: 'It\'s my first post', likesCount: '23'},
        ],
        NewPostText:''
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
}

export const addPost=()=>{
    const newPost: PostsDataType={
        id: '3',
        massage: State.ProfilePage.NewPostText,
        likesCount: '0'
    };

    State.ProfilePage.PostsData.push(newPost)
    State.ProfilePage.NewPostText=''
    rerenderEntireTree();
}
export const updateNewPostText=(newText:string)=>{
    State.ProfilePage.NewPostText=newText
    rerenderEntireTree();
}
export const subscriber=(observer:()=>void)=>{
    rerenderEntireTree=observer
}