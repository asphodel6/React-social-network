import React from "react";
import DialogItem from "./DialogItem/DialogItem";
import s from './Dialogs.module.css'
import Message from "./Message/Message";

const Dialogs = () => {

    let dialogs = [
        { id: 1, name: 'Daniil' },
        { id: 2, name: 'Alex' },
        { id: 3, name: 'Grisha' },
        { id: 4, name: 'Emil' },
        { id: 5, name: 'Egor' },
        { id: 6, name: 'Vova' }
    ]

    let messages = [
        { id: 1, message: 'Hi' },
        { id: 2, message: 'How are you?' },
        { id: 3, message: 'Bye' }
    ]

    let dialogsElements = dialogs.map(d => <DialogItem name={d.name} id={d.id} />);
    let messagesElements = messages.map(m => <Message message={m.message} />);

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
            </div>
        </div>
    )
}

export default Dialogs;