import React from "react";
import { NavLink } from "react-router-dom";
import s from './Navbar.module.css'

const Navbar = () => {
    return <nav className={s.nav}>
        <div><NavLink to="/profile" className={navData => navData.isActive ? s.active : s.item}>Profile</NavLink></div>
        <div><NavLink to="/dialogs" className={navData => navData.isActive ? s.active : s.item}>Messages</NavLink></div>
        <div><NavLink to="/users" className={navData => navData.isActive ? s.active : s.item}>Users</NavLink></div>
        <div><NavLink className={navData => navData.isActive ? s.active : s.item}>News</NavLink></div>
        <div><NavLink className={navData => navData.isActive ? s.active : s.item}>Music</NavLink></div>
        <div><NavLink className={navData => navData.isActive ? s.active : s.item}>Settings</NavLink></div>
    </nav>
}

export default Navbar;