import classes from "./Post.module.css";
import React from "react";
import {PostType} from "../../../../redux/state";


export const Post = (props: PostType) => {
    return (
        <div>
            <div className={classes.item}>
                <img className={classes.avatar}
                    src="https://avatars.mds.yandex.net/i?id=2a0000017a11da9cb45d4eb598fc5967415f-4576345-images-thumbs&n=13"
                    alt="Rermer."/>
                {props.message}
            </div>
            <div>
                <span>{props.message} like </span>
            </div>
        </div>
    )
}
