import classes from "./NewsList.module.css";
import {NavLink} from "react-router-dom";
import React from "react";

type NewsListProps = {
    id?: number
    img?: string
    text?: string
}

export const NewsList = (props: NewsListProps) => {
    let path = '/newsItem';

    return (
        <NavLink className={classes.link} to={`${path}/${props.id}`}>
            <div className={classes.column}>
                <div>
                    <img className={classes.img} src={props.img} alt="Background."/>
                </div>
                <p className={classes.text}>
                    {props.text}
                </p>
            </div>
        </NavLink>
    )
}

// <NavLink to="profile"
//          className={({ isActive }) => (isActive ? classes.active : '')}>
//     Profile
// </NavLink>