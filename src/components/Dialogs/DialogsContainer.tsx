import {ChangeEvent} from 'react';
import {SendMessageAC, UpdateNewMessageBodyAC} from '../../State/DialogsPageReducer';
import {Dialogs} from './Dialogs';
import {connect} from 'react-redux';
import {AppStateType} from '../../State/ReduxStore';

const mapStateToProps = (state: AppStateType) => {
    return {
        dialogsPage: state.DialogsPage
    }
}
const mapDispatchToProps = (dispatch: (arg0: { type: "UPDATE-NEW-MASSAGE-BODY" | "SEND-MESSAGE"; body?: string; }) => void) => {
    return {
        UpdateNewMessageBody: (body: ChangeEvent<HTMLTextAreaElement>) => {
            dispatch(UpdateNewMessageBodyAC(body));
        },
        SendMessage: () => {
            dispatch(SendMessageAC())
        }
    }
}

export const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);