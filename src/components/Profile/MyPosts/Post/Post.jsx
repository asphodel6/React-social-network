import React from "react";
import s from './Post.module.css'

const Post = (props) => {
    return <div className={s.item}>
        <img src="https://img.a.transfermarkt.technology/portrait/big/781-1663951943.jpg?lm=1" />
        {props.message}
        <div><span>{props.likeCounter}</span></div>
    </div>

}

export default Post;