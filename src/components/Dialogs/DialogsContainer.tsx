import {ChangeEvent} from 'react';
import {dialogsPageType, SendMessageAC, UpdateNewMessageBodyAC} from '../../State/DialogsPageReducer';
import {Dialogs} from './Dialogs';
import {connect} from 'react-redux';
import {AppStateType} from '../../State/ReduxStore';
import {Dispatch} from 'redux';

type dialogsPage={
        dialogsPage:dialogsPageType
}

type mapDispatchToPropsType= {
    UpdateNewMessageBody: (body: ChangeEvent<HTMLTextAreaElement>) => void
    SendMessage: () => void
}

export type DialogsType=dialogsPage & mapDispatchToPropsType
const mapStateToProps = (state: AppStateType):dialogsPage => {
    return {
        dialogsPage: state.DialogsPage
    }
}
const mapDispatchToProps = (dispatch:Dispatch):mapDispatchToPropsType => {
    return {
        UpdateNewMessageBody: (body) => {
            dispatch(UpdateNewMessageBodyAC(body));
        },
        SendMessage: () => {
            dispatch(SendMessageAC())
        }
    }
}

export const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);