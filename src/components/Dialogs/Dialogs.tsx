import React, {ChangeEvent} from 'react';
import s from './Dialogs.module.css';
import {DialogsItem} from './DialogsItem/DialogsItem';
import {Message} from './Messages/Messages';
import {
    ActionTypes,
    DialogsDataType,
    DialogsMassagesDataType,
    SendMessageAC,
    UpdateNewMessageBodyAC,
} from '../../State/State';

type DialogsType = {
    DialogsData: Array<DialogsDataType>,
    DialogsMassagesData: Array<DialogsMassagesDataType>
    NewMassageBody:string
    dispatch:(type:ActionTypes)=>void
}
export const Dialogs = (props: DialogsType) => {
    const DialogsItemData =
        props.DialogsData.map((m) => {
            return (
                <div className={s.dialog}>
                    <DialogsItem id={m.id} name={m.name}/>
                </div>)
        })

    const MassagesData =
        props.DialogsMassagesData.map((m) => {
            return (
                <Message key={m.id} message={m.message}/>)
        })
    const onChangeMassageHandler=(body:ChangeEvent<HTMLTextAreaElement>)=>{
        props.dispatch(UpdateNewMessageBodyAC(body))

    }
const addMassageHandler=()=>{
    props.dispatch(SendMessageAC())
}
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItem}>
                {DialogsItemData}
            </div>
            <div>
                <div className={s.messages}>
                    {MassagesData}
                </div>
                <div>
                    <textarea value={props.NewMassageBody} placeholder="Enter your message" onChange={onChangeMassageHandler}></textarea>
                </div>
                <div>
                    <button onClick={addMassageHandler}>addMassage</button>
                </div>
            </div>
        </div>
    );
};
