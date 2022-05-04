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

const Massage=(props:propsMessageType)=>{
    return(
    <div className={s.message}>{props.message}</div>
    )
}

const DialogsData=[
    {id:'1', name:'Dimych'},
    {id:'2', name:'Andrey'},
    {id:'3', name:'Sveta'},
    {id:'4', name:'Victor'},
    {id:'5', name:'Valera'}
]

const MassagesData=[
    {id:'1', massege:'Hi'},
    {id:'2', massege:'Hi 2'},
    {id:'3', massege:'Hi Hi Hi'}
]


export const Dialogs = () => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItem}>
                {DialogsData.map((m)=>{
                    return(
                        <DialogsItem name={m.name} id={m.id}/>
                    )
                })}
            </div>
            <div className={s.messages}>
                {MassagesData.map((m)=>{
                    return(
                        <Massage key={m.id} message={m.massege}/>
                    )
                })}
            </div>
        </div>
    );
};
