import React from "react";
import { NavLink } from "react-router-dom";
import s from './Dialogs.module.css'

const Dialogs = () => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <div className={s.dialog + ' ' + s.active}><NavLink to="/dialogs/1">Daniil</NavLink></div>
                <div className={s.dialog}><NavLink to="/dialogs/2">Alex</NavLink></div>
                <div className={s.dialog}><NavLink to="/dialogs/3">Grisha</NavLink></div>
                <div className={s.dialog}><NavLink to="/dialogs/4">Emil</NavLink></div>
                <div className={s.dialog}><NavLink to="/dialogs/5">Egor</NavLink></div>
                <div className={s.dialog}><NavLink to="/dialogs/6">Vova</NavLink></div>
            </div>
            <div className={s.messages}>
                <div className={s.dialog}>Hi</div>
                <div className={s.dialog}>How are you?</div>
                <div className={s.dialog}>Bye</div>
            </div>
        </div>
    )
}

export default Dialogs;