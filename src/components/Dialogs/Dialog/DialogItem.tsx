import classes from "../Dialogs.module.css";
import {NavLink} from "react-router-dom";
import React from "react";

type DialogItemProps = {
    name: string
    id: string
}

export const DialogItem = (props: DialogItemProps) => {
    let path = 'dialogs/' + props.id;
    return (
        <div className={classes.dialog + ' ' + classes.active}>
            <NavLink to={path}>
                {props.name}
            </NavLink>
        </div>
    )
};