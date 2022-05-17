import {ChangeEvent} from 'react';
import {ActionTypes, messagesPageType} from './Store';

const UPDATE_NEW_MASSAGE_BODY = 'UPDATE-NEW-MASSAGE-BODY'
const SEND_MESSAGE = 'SEND-MESSAGE'

export const DialogsPageReducer = (state:messagesPageType, action:ActionTypes) => {
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