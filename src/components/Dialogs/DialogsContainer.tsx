import React, {ChangeEvent} from 'react';
import {SendMessageAC, UpdateNewMessageBodyAC} from '../../State/DialogsPageReducer';
import {Dialogs} from './Dialogs';

type DialogsType = {
    store: any
}
export const DialogsContainer = (props: DialogsType) => {
    const state = props.store.getState().DialogsPage;

    const UpdateNewMessageBody = (body: ChangeEvent<HTMLTextAreaElement>) => {
        props.store.dispatch(UpdateNewMessageBodyAC(body))

    }
    const SendMessage = () => {
        props.store.dispatch(SendMessageAC())
    }
    return (
        <Dialogs
            UpdateNewMessageBody={UpdateNewMessageBody}
            SendMessage={SendMessage}
            state={state}
        />
    );
};
