import React from "react";
import classes from './Dialogs.module.css';
import {DialogItem} from "./Dialog/DialogItem";
import {Message} from "./Dialog/Message/Message";

const dialogs = [
    {id: 1, name: 'Dimych'},
    {id: 2, name: 'How are you?'},
    {id: 3, name: 'Max'},
    {id: 4, name: 'Polina'},
    {id: 5, name: 'Volodya'},
    {id: 6, name: 'Inna'},
];

const messages = [
    {id: 1, message: 'Hi :)'},
    {id: 2, message: 'How are you?'},
    {id: 3, message: 'Was the lesson great yesterday, did you do your homework?'},
];

let dialogElements = dialogs.map((el, index) => {
    return (
        <DialogItem key={index} id={el.id} name={el.name}/>
    )
})

let mesagesElement = messages.map((el,index)=> {
    return (
        <Message key={index} text={el.message}/>
    )
})

export const Dialogs = () => {
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