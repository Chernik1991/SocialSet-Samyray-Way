import React from 'react';
import s from './Dialogs.module.css';
import {DialogsItem} from './DialogsItem/DialogsItem';
import {Message} from './Messages/Messages';
import {DialogsDataType, DialogsMassagesDataType} from '../../State/State';

type DialogsType = {
    DialogsData: Array<DialogsDataType>,
    DialogsMassagesData: Array<DialogsMassagesDataType>
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
    const addMassage=React.createRef<HTMLTextAreaElement>()
const addMassageHandler=()=>{
    alert(addMassage.current?.value)
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
                    <textarea ref={addMassage}></textarea>
                </div>
                <div>
                    <button onClick={addMassageHandler}>addMassage</button>
                </div>
            </div>
        </div>
    );
};
