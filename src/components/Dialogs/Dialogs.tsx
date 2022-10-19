import React from "react";
import classes from './Dialogs.module.css';
import {DialogItem} from "./Dialog/DialogItem";
import {Message} from "./Dialog/Message/Message";


export const Dialogs = () => {
    return (
        <div className={classes.dialogs}>
            {/*<h1>Dialog</h1>*/}
            <div className={classes.dialogsItems}>
                <DialogItem name={'Dimich'} id={'1'}/>
                <DialogItem name={'Miron'} id={'2'}/>
                <DialogItem name={'Max'} id={'3'}/>
                <DialogItem name={'Polina'} id={'4'}/>
                <DialogItem name={'Volodya'} id={'5'}/>
                <DialogItem name={'Inna'} id={'6'}/>
            </div>
            <div className={classes.messages}>
                <Message text={'Hi :)'} />
                <Message text={'How are you?'} />
                <Message text={'Was the lesson great yesterday, did you do your homework?'} />
            </div>
        </div>
    )
}