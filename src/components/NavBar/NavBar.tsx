import React from "react";
import classes from "./NavBar.module.css";
import {NavLink} from "react-router-dom";

export const NavBar = () => {

    return (
        <nav className={classes.nav}>
                <div className={classes.item}>
                    <NavLink to="profile"
                             className={({ isActive }) => (isActive ? classes.active : '')}>
                        Profile
                    </NavLink>
                </div>
                <div className={classes.item}>
                    <NavLink to="dialogs" className={({ isActive }) => (isActive ? classes.active : '')}>
                        Messages
                    </NavLink>
                </div>
                <div className={classes.item}>
                    <NavLink to="news" className={({ isActive }) => (isActive ? classes.active : '')}>
                        News
                    </NavLink>
                </div>
                <div className={classes.item}>
                    <NavLink to="music" className={({ isActive }) => (isActive ? classes.active : '')}>
                        Music
                    </NavLink>
                </div>
                <div className={classes.item}>
                    <NavLink to="setting" className={({ isActive }) => (isActive ? classes.active : '')}>
                        Setting
                    </NavLink>
                </div>
        </nav>
    )
};