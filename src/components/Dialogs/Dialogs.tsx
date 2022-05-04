import React from 'react';
import {NavLink} from 'react-router-dom';
import s from './Dialogs.module.css';

type propsDialogsItemType={
    name:string
    id:string
}
type propsMessageType={
    message:string
}

const DialogsItem=(props:propsDialogsItemType)=>{

    const path="/dialogs/"+props.id
    return(
        <div className={s.dialog + ' ' + s.active}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}

const Massege=(props:propsMessageType)=>{
    return(
    <div className={s.message}>{props.message}</div>
    )
}
export const Dialogs = () => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItem}>
                <DialogsItem name={'Dimych'} id={'1'} />
                <DialogsItem name={'Andrey'} id={'2'} />
                <DialogsItem name={'Sveta'} id={'3'} />
                <DialogsItem name={'Victor'} id={'4'} />
                <DialogsItem name={'Valera'} id={'5'} />

            </div>
            <div className={s.messages}>
                <Massege message={'Hi'}/>
                <Massege message={'Hi 2'}/>
                <Massege message={"Hi Hi Hi"}/>
            </div>
        </div>
    );
};
