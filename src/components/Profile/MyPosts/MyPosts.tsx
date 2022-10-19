import classes from "./MyPost.module.css";
import React from "react";
import {Post} from "./Post/Post";


export const MyPosts = () => {
    return (
        <div className={classes.postBlock}>
            my post
            <div>
                <textarea ></textarea>
                <button>Add post</button>
            </div>
            <div className={classes.posts}>
                <Post message={'Hi, how are you'} likesCount={12}/>
                <Post message={'It`s my first post'} likesCount={56}/>
            </div>
        </div>
    )
}