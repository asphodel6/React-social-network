import React from "react";
import s from './MyPosts.module.css'
import Post from "./Post/Post";

const MyPosts = () => {
    return <div>
        <h3 className={s.content}>My posts</h3>
        <div>
            <div>
                <textarea></textarea>
            </div>
            <div>
                <button>Add post</button>
            </div>
        </div>
        <div className={s.posts}>
            <Post message='I am the special one' likeCounter='16' />
            <Post message='Lmao' likeCounter='148' />
        </div>
    </div>
}

export default MyPosts;