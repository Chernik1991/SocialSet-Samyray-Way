import React from 'react';
import s from './Dialogs.module.css';
import {DialogsItem} from './DialogsItem/DialogsItem';
import {Message} from './Messages/Messages';
import {DialogsDataType, DialogsMassagesDataType} from '../../index';

type DialogsType={
    DialogsData:Array<DialogsDataType>,
    DialogsMassagesData:Array<DialogsMassagesDataType>
}


export const Dialogs = (props:DialogsType) => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItem}>
                {props.DialogsData.map((m) => {
                    return (
                        <div className={s.dialog}>
                            <DialogsItem id={m.id} name={m.name}/>
                        </div>
                    )
                })}
                    </div>
                    <div className={s.messages}>
                {props.DialogsMassagesData.map((m)=>{
                    return(
                    <Message key={m.id} message={m.message}/>
                    )
                })}
                    </div>
                    </div>
                    );
                };
