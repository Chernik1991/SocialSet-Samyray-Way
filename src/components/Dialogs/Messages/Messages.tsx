import React from 'react';
import s from './../Dialogs.module.css';

type propsMessageType = {
    message: string
}

export const Message = (props: propsMessageType) => {
    return (
        <div className={s.message}>{props.message}</div>
    )
}