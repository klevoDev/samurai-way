import React from "react";
import classes from './Dialogs.module.css';
import {DialogItem} from "./Dialog/DialogItem";
import {Message} from "./Dialog/Message/Message";
import {DialogType, MessageType} from "../../redux/state";

type DialogsPropsType = {
    messages: Array<MessageType>
    dialogs: Array<DialogType>
}

export const Dialogs = (props: DialogsPropsType) => {

    let dialogElements = props.dialogs.map((el, index) => {
        return (
            <DialogItem key={index} id={el.id} name={el.name}/>
        )
    })

    let mesagesElement = props.messages.map((el, index) => {
        return (
            <div className={classes.messageBlock}>
                <Message key={index} text={el.message}/>
                <textarea className={classes.textArea}></textarea>
                <button onClick={()=>{}}>Send</button>
            </div>
        )
    })

    return (
        <div className={classes.dialogs}>
            {/*<h1>Dialog</h1>*/}
            <div className={classes.dialogsItems}>
                {dialogElements}
            </div>
            <div className={classes.messages}>
                {mesagesElement}
            </div>
        </div>
    )
}