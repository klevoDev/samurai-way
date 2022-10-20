import React from "react";
import classes from './Dialogs.module.css';
import {DialogItem} from "./Dialog/DialogItem";
import {Message} from "./Dialog/Message/Message";

const dialogData = [
    {id: 1, name: 'Dimych'},
    {id: 2, name: 'How are you?'},
    {id: 3, name: 'Max'},
    {id: 4, name: 'Polina'},
    {id: 5, name: 'Volodya'},
    {id: 6, name: 'Inna'},
];

const messagesData = [
    {id: 1, message: 'Hi :)'},
    {id: 2, message: 'How are you?'},
    {id: 3, message: 'Was the lesson great yesterday, did you do your homework?'},
];

export const Dialogs = () => {
    return (
        <div className={classes.dialogs}>
            {/*<h1>Dialog</h1>*/}
            <div className={classes.dialogsItems}>
                <DialogItem id={dialogData[0].id} name={dialogData[0].name}/>
                <DialogItem id={dialogData[1].id} name={dialogData[1].name}/>
                <DialogItem id={dialogData[2].id} name={dialogData[2].name}/>
            </div>
            <div className={classes.messages}>
                <Message text={messagesData[0].message}/>
                <Message text={messagesData[1].message}/>
            </div>
        </div>
    )
}