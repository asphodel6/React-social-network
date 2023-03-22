import React from "react";
import s from './ProfileInfo.module.css'

const ProfileInfo = () => {
    return (
        <div>
            <div><img className={s.main_img} src="https://sodsolutions.com/wp-content/uploads/2022/09/NorthBridge-Bermudagrass-on-Kansas-Citys-Arrowhead-Stadium-scaled.jpg" alt="Stadium"/></div>
            <div className={s.content}>ava + discription</div>
        </div>
    )
}

export default ProfileInfo;