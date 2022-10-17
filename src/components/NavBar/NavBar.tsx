import React from "react";
import classes from "./NavBar.module.css";


export const NavBar =()=>{
    return (
        <nav className={classes.nav}>
            <div >
                <a className={classes.item} href="/profile">Profile</a>
            </div>
            <div >
                <a className={`${classes.item} ${classes.active}`} href="/dialogs">Messages</a>
            </div>
            <div >
                <a className={classes.item} href="/news">News</a>
            </div>
            <div >
                <a className={classes.item} href="music">Music</a>
            </div>
            <div >
                <a className={classes.item} href="setting">Setting</a>
            </div>
        </nav>
    )
}