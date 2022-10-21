import classes from "./MyPost.module.css";
import React from "react";
import {Post} from "./Post/Post";


export const MyPosts = () => {

    const posts = [
        {id: 1, message: 'Hi :)', likesCount: 12},
        {id: 2, message: 'How are you?', likesCount: 15},
    ];

    let postElement = posts.map((el, index)=>{
        return (
            <Post key={index} message={el.message} likesCount={el.likesCount}/>
        )
    })

    return (
        <div className={classes.postBlock}>
            my post
            <div>
                <textarea ></textarea>
                <button>Add post</button>
            </div>
            <div className={classes.posts}>
                {postElement}
            </div>
        </div>
    )
}