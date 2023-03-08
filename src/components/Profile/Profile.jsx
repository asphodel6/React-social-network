import React from "react";
import MyPosts from "./MyPosts/MyPosts";
import s from './Profile.module.css'

const Profile = () => {
    return <div>
        <div><img className={s.main_img} src="https://sodsolutions.com/wp-content/uploads/2022/09/NorthBridge-Bermudagrass-on-Kansas-Citys-Arrowhead-Stadium-scaled.jpg" /></div>
        <div className={s.content}>ava + discription</div>
        <MyPosts />
    </div>
}

export default Profile;