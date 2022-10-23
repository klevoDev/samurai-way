import classes from "../Dialogs.module.css";
import {NavLink} from "react-router-dom";
import React from "react";

type DialogItemProps = {
    id: number
    name: string
}

export const DialogItem = (props: DialogItemProps) => {
    let path = 'dialogs/' + props.id;
    return (
        <div className={classes.dialog + ' ' + classes.active}>
            <NavLink to={path}>
                <img className={classes.avatar} src="" alt="Users foto."/>
                {props.name}
            </NavLink>
        </div>
    )
};