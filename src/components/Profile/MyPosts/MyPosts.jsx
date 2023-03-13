import React from "react";
import s from './MyPosts.module.css'
import Post from "./Post/Post";

const MyPosts = () => {

    let posts = [
        { id: 1, message: 'I am the special one', likesCount: 16 },
        { id: 2, message: 'Lmao', likesCount: 148 },
    ]

    let postsElements = posts.map(p => <Post message={p.message} likeCounter={'likes ' + p.likesCount} /> );

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
            {postsElements}
        </div>
    </div>
}

export default MyPosts;