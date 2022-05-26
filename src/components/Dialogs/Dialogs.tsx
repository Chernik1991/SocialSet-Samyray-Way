import React, {ChangeEvent} from 'react';
import s from './Dialogs.module.css';
import {DialogsItem} from './DialogsItem/DialogsItem';
import {Message} from './Messages/Messages';
import {DialogsType} from './DialogsContainer';

export const Dialogs = (props: DialogsType) => {

    const DialogsItemData =
        props.dialogsPage.DialogsData.map((m) => {
            return (
                <div className={s.dialog}>
                    <DialogsItem id={m.id} name={m.name}/>
                </div>)
        })

    const MassagesData =
        props.dialogsPage.DialogsMassagesData.map((m) => {
            return (
                <Message key={m.id} message={m.message}/>)
        })
    const onChangeMassageHandler = (body: ChangeEvent<HTMLTextAreaElement>) => {
        props.UpdateNewMessageBody(body)

    }
    const addMassageHandler = () => {
        props.SendMessage()
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
                    <textarea value={props.dialogsPage.NewMassageBody} placeholder="Enter your message"
    onChange={onChangeMassageHandler}/>
                </div>
                <div>
                    <button onClick={addMassageHandler}>addMassage</button>
                </div>
            </div>
        </div>
    );
};
