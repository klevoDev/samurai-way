import classes from "./MyPost.module.css";
import React from "react";
import {Post} from "./Post/Post";
import {PostType} from "../../../redux/state";

export type PostPropType = {
    post: Array<PostType>
    addPost: (text: string) => void
}

export const MyPosts = (props: PostPropType) => {

    let postElement = props.post.map((el, index) => {
        return (
            <Post key={index} id={el.id} message={el.message} likesCount={el.likesCount}/>
        )
    })

    let newPostElement = React.createRef<HTMLTextAreaElement>() // добавил

    let addPost = () => { // добавил
        let text = newPostElement.current!.value
        props.addPost(text)
        newPostElement.current!.value = ''
        console.log(newPostElement)
     }

    return (
        <div className={classes.postBlock}>
            my post
            <div>
                <textarea ref={newPostElement}></textarea>
                <button onClick={addPost}>Add post</button>
            </div>
            <div className={classes.posts}>
                {postElement}
            </div>
        </div>
    )
}