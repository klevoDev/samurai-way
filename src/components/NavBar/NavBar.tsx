import React from "react";
import classes from "./NavBar.module.css";


export const NavBar =()=>{
    return (
        <nav className={classes.nav}>
            <div >
                <a className={classes.item} href="src/components/NavBar/NavBar">Profile</a>
            </div>
            <div >
                <a className={`${classes.item} ${classes.active}`} href="src/components/NavBar/NavBar">Messages</a>
            </div>
            <div >
                <a className={classes.item} href="src/components/NavBar/NavBar">News</a>
            </div>
            <div >
                <a className={classes.item} href="src/components/NavBar/NavBar">Music</a>
            </div>
            <div >
                <a className={classes.item} href="src/components/NavBar/NavBar">Setting</a>
            </div>
        </nav>
    )
}