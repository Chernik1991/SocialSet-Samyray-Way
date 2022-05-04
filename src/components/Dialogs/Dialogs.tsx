import React from 'react';
import {NavLink} from 'react-router-dom';
import s from './Dialogs.module.css';

export const Dialogs = () => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItem}>
                <div className={s.dialog + ' ' + s.active}>
                    <NavLink to="/dialogs/1">
                        Dimych
                    </NavLink>
                </div>
                <div className={s.dialog + ' ' + s.active}>
                    <NavLink to="/dialogs/2">
                        Andrey
                    </NavLink>
                </div>
                <div className={s.dialog + ' ' + s.active}>
                    <NavLink to="/dialogs/3">
                        Sveta
                    </NavLink>
                </div>
                <div className={s.dialog + ' ' + s.active}>
                    <NavLink to="/dialogs/4">
                        Victor
                    </NavLink>
                </div>
                <div className={s.dialog + ' ' + s.active}>
                    <NavLink to="/dialogs/5">
                        Valera
                    </NavLink>
                </div>
            </div>
            <div className={s.messages}>
                <div className={s.message}>Hi</div>
                <div className={s.message}>Hi 2</div>
                <div className={s.message}> Hi Hi Hi</div>

            </div>
        </div>
    );
};
