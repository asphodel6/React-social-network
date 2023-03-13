import React from "react";
import { NavLink } from "react-router-dom";
import s from './Dialogs.module.css'

const DialogItem = (props) => {
    let path = "/dialogs/" + props.id;
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

    let dialogsData = [
        { id: 1, name: 'Daniil' },
        { id: 2, name: 'Alex' },
        { id: 3, name: 'Grisha' },
        { id: 4, name: 'Emil' },
        { id: 5, name: 'Egor' },
        { id: 6, name: 'Vova' }
    ]

    let messagesData = [
        { id: 1, message: 'Hi' },
        { id: 2, message: 'How are you?' },
        { id: 3, message: 'Bye' },
    ]

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <DialogItem name={dialogsData[0].name} id={dialogsData[0].id} />
                <DialogItem name={dialogsData[1].name} id={dialogsData[1].id} />
                <DialogItem name={dialogsData[2].name} id={dialogsData[2].id} />
                <DialogItem name={dialogsData[3].name} id={dialogsData[3].id} />
                <DialogItem name={dialogsData[4].name} id={dialogsData[4].id} />
                <DialogItem name={dialogsData[5].name} id={dialogsData[5].id} />
            </div>
            <div className={s.messages}>
                <Message message={messagesData[0].message} />
                <Message message={messagesData[1].message} />
                <Message message={messagesData[2].message} />
            </div>
        </div>
    )
}

export default Dialogs;