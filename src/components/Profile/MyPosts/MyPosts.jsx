import React from "react";
import s from './MyPosts.module.css'
import Post from "./Post/Post";

const MyPosts = () => {

    let postData = [
        { id: 1, message: 'I am the special one', likesCount: 16 },
        { id: 2, message: 'Lmao', likesCount: 148 },
    ]

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
            <Post message={postData[0].message} likeCounter={'likes ' + postData[0].likesCount} />
            <Post message={postData[1].message} likeCounter={'likes ' + postData[1].likesCount} />
        </div>
    </div>
}

export default MyPosts;