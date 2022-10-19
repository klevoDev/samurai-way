import classes from "./ProfileInfo.module.css"
import React from "react";


export const ProfileInfo = () => {
    return (
        <>
            <div>
                <img className={classes.background} src="https://wallbox.ru/wallpapers/main/201551/d24ebf33ab5602e.jpg" alt="Beach."/>
            </div>
            <div className={classes.descriptionBlock}>
                ava + description
                <img className={classes.item}
                     src="https://avatars.mds.yandex.net/i?id=2a0000017a11da9cb45d4eb598fc5967415f-4576345-images-thumbs&n=13"
                     alt="Fermer."/>
            </div>
        </>
    )
}