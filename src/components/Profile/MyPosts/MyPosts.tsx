import classes from "./MyPost.module.css";
import React from "react";
import {Post} from "./Post/Post";


export const MyPosts = () => {

    const postData = [
        {id: 1, message: 'Hi :)', likesCount: 12},
        {id: 2, message: 'How are you?', likesCount: 15},
    ];

    return (
        <div className={classes.postBlock}>
            my post
            <div>
                <textarea ></textarea>
                <button>Add post</button>
            </div>
            <div className={classes.posts}>
                <Post message={postData[0].message} likesCount={postData[0].likesCount}/>
                <Post message={postData[1].message} likesCount={postData[1].likesCount}/>

            </div>
        </div>
    )
}