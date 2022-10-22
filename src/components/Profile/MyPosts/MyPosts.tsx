import classes from "./MyPost.module.css";
import React from "react";
import {Post} from "./Post/Post";
import {PostType} from "../../../redux/state";

export type PostPropType = {
    post: Array<PostType>
}

export const MyPosts = (props: PostPropType) => {

    let postElement = props.post.map((el, index)=>{
        return (
            <Post key={index} id={el.id} message={el.message} likesCount={el.likesCount}/>
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