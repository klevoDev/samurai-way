import classes from "./Post.module.css";
import React from "react";


export const Post = () => {
    return (
        <div>
            <div className={classes.item}>
                <img className={classes.avatar}
                    src="https://avatars.mds.yandex.net/i?id=2a0000017a11da9cb45d4eb598fc5967415f-4576345-images-thumbs&n=13"
                    alt="Rermer."/>
                post
            </div>
            <div>
                <span>like  </span>
                <span>dislike</span>
            </div>
        </div>
    )
}
