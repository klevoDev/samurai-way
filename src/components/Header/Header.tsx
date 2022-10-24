import React from "react";
import classes from "./Header.module.css";
import {Logo} from "./logo/Logo";

export const Header = () => {
    return (
        <header className={classes.header}>
            <Logo />
        </header>
    )
}