import {ChangeEvent} from 'react';
import {ActionTypes} from './ReduxStore';

const UPDATE_NEW_MASSAGE_BODY = 'UPDATE-NEW-MASSAGE-BODY'
const SEND_MESSAGE = 'SEND-MESSAGE'
export type dialogsPageType= {
    DialogsData: Array<DialogsDataType>
    DialogsMassagesData: Array<DialogsMassagesDataType>
    NewMassageBody: string
}
export type DialogsMassagesDataType = {
    id: string,
    message: string
}
export type DialogsDataType = {
    id: string,
    name: string
}
const initialState:dialogsPageType={
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
export const DialogsPageReducer = (state:dialogsPageType=initialState, action:ActionTypes):dialogsPageType => {
    switch (action.type) {
        case UPDATE_NEW_MASSAGE_BODY:
            state.NewMassageBody = action.body;
            return state;
        case SEND_MESSAGE:
            let body = state.NewMassageBody;
            state.NewMassageBody = ''
            state.DialogsMassagesData.push({id: '4', message: body})
            return state;
        default:
            return state;

    }
}

export type UpdateNewMessageBody = ReturnType<typeof UpdateNewMessageBodyAC>

export const UpdateNewMessageBodyAC = (event: ChangeEvent<HTMLTextAreaElement>) => {
    const body = event.currentTarget.value
    return {
        type: 'UPDATE-NEW-MASSAGE-BODY',
        body: body
    } as const
}
export type SendMessage = ReturnType<typeof SendMessageAC>

export const SendMessageAC = () => {
    return {
        type: 'SEND-MESSAGE',
    } as const
}