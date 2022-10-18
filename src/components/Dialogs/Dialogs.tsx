import React from "react";
import classes from './Dialogs.module.css';


export const Dialogs = () => {
    return (
        <div className={classes.dialogs}>
            {/*<h1>Dialog</h1>*/}
            <div className={classes.dialogsItems}>
                <div className={classes.dialog + ' ' + classes.active}>
                    Dima
                </div>
                <div className={classes.dialog}>
                    Max
                </div>
                <div className={classes.dialog}>
                    Polina
                </div>
                <div className={classes.dialog}>
                    Miron
                </div>
                <div className={classes.dialog}>
                    Volodya
                </div>
            </div>
            <div className={classes.messages}>
                <div className={classes.message}>
                    Hi
                </div>
                <div className={classes.message}>
                    how are you?
                </div>
                <div className={classes.message}>
                    was the lesson great yesterday, did you do your homework?
                </div>
            </div>
        </div>
    )
}