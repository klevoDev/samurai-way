import React from "react";
import classes from "./Header.module.css";



export const Header = () => {
    return (
        <header className={classes.header}>
            <img
                src="https://avatars.mds.yandex.net/i?id=fbf7a4862c0f16a6a692d97f6647a536-5750239-images-thumbs&n=13"
                alt="Logo company."/>
        </header>
    )
}