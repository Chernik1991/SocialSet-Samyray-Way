import React from 'react';
import {NavLink} from 'react-router-dom';
import s from './../Dialogs.module.css';

type propsDialogsItemType = {
    name: string
    id: string
}

export const DialogsItem = (props: propsDialogsItemType) => {

    const path = '/dialogs/' + props.id
    return (
        <div className={s.dialog + ' ' + s.active}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}