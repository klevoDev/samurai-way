import React from "react";
import classes from "./NavBar.module.css";


export const NavBar =()=>{
    return (
        <nav className={classes.nav}>
            <div >
                <a className={classes.item} href="">Profile</a>
            </div>
            <div >
                <a className={`${classes.item} ${classes.active}`} href="">Messages</a>
            </div>
            <div >
                <a className={classes.item} href="">News</a>
            </div>
            <div >
                <a className={classes.item} href="">Music</a>
            </div>
            <div >
                <a className={classes.item} href="">Setting</a>
            </div>
        </nav>
    )
}