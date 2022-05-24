import {ChangeEvent} from 'react';
import {ActionTypes} from './ReduxStore';

const UPDATE_NEW_MASSAGE_BODY = 'UPDATE-NEW-MASSAGE-BODY'
const SEND_MESSAGE = 'SEND-MESSAGE'
export type dialogsPageType = typeof initialState
export type DialogsMassagesDataType = {
    id: string,
    message: string
}
export type DialogsDataType = {
    id: string,
    name: string
}
export const initialState = {
    DialogsData: [
        {id: '1', name: 'Dimychc'},
        {id: '2', name: 'Andrey'},
        {id: '3', name: 'Sveta'},
        {id: '4', name: 'Victor'},
        {id: '5', name: 'Valera'}
    ] as Array<DialogsDataType>,
    DialogsMassagesData: [
        {id: '1', message: 'Hi'},
        {id: '2', message: 'Hi 2'},
        {id: '3', message: 'Hi Hi Hi'}
    ] as Array<DialogsMassagesDataType>,
    NewMassageBody: '' as string,
}


export const DialogsPageReducer = (state = initialState, action: ActionTypes) => {
    switch (action.type) {
        case UPDATE_NEW_MASSAGE_BODY:
            return {
                ...state,
                NewMassageBody: action.body
            };
        case SEND_MESSAGE:
            // state={...state}
            let body = state.NewMassageBody;
            // state.NewMassageBody = ''
            // state.DialogsMassagesData.push({id: '4', message: body})
            return {...state,
                NewMassageBody:'',
                DialogsMassagesData:[...state.DialogsMassagesData,{id: '4', message: body}]
            };
        default:
            return {...state};

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