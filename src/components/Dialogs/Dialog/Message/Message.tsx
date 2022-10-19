import classes from "../../Dialogs.module.css";
import React from "react";

type MessagePropsType = {
    text: string
}

export const Message = (props: MessagePropsType) => {
    return (
        <div className={classes.message}>
            {props.text}
        </div>
    )
}