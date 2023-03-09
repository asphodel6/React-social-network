import React from "react";
import { NavLink } from "react-router-dom";
import s from './Dialogs.module.css'

const DialogItem = (props) => {
    let path = "/dialogs" + props.id;
    return (
        <div className={s.dialog + ' ' + s.active}><NavLink to={path}>{props.name}</NavLink></div>
    )
}

const Message = (props) => {
    return (
        <div className={s.dialog}>{props.message}</div>
    )
}

const Dialogs = () => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <DialogItem name="Daniil" id="1" />
                <DialogItem name="Alex" id="2" />
                <DialogItem name="Grisha" id="3" />
                <DialogItem name="Emil" id="4" />
                <DialogItem name="Egor" id="5" />
                <DialogItem name="Vova" id="6" />
            </div>
            <div className={s.messages}>
                <Message message="Hi" />
                <Message message="How are you?" />
                <Message message="Bye" />
            </div>
        </div>
    )
}

export default Dialogs;