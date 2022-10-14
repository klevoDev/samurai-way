import classes from "./MyPost.module.css";
import React from "react";
import {Post} from "./Post/Post";


export const MyPosts = () => {
    return (
        <div >
            my post
            <div>
                <textarea ></textarea>
                <button>Add post</button>
            </div>
            <div className={classes.posts}>
                <Post message={'Hi, how are you'}/>
                <Post message={'It`s my first post'}/>
            </div>
        </div>
    )
}