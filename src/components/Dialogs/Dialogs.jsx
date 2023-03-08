import React from "react";
import s from './Dialogs.module.css'

const Dialogs = () => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <div className={s.dialog + ' ' + s.active}>Daniil</div>
                <div className={s.dialog}>Alex</div>
                <div className={s.dialog}>Grisha</div>
                <div className={s.dialog}>Emil</div>
                <div className={s.dialog}>Egor</div>
                <div className={s.dialog}>Vova</div>
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