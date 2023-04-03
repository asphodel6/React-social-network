import React from "react";
import styles from "./Users.module.css";
import axios from "axios";
import userPhoto from "../../assets/images/Doumbia.jpeg"

let Users = (props) => {

    if (props.users.length === 0) {

        axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => {
            props.setUsers(response.data.items)
        });

        // props.setUsers([
        //     {
        //         id: 1,
        //         photoUrl: "https://sun3-22.userapi.com/impf/c849420/v849420067/18c761/Ys5AQgTVlkM.jpg?size=622x1280&quality=96&sign=d090f8228022578b602d18d850cb8ea9&type=album",
        //         followed: true,
        //         fullName: "Daniil",
        //         status: "Top",
        //         location: {city: "Yekaterinburg", country: "Russia"}
        //     },
        //     {
        //         id: 2,
        //         photoUrl: "https://sun9-75.userapi.com/impf/c854028/v854028830/f7146/B-WmBYg2V04.jpg?size=959x1280&quality=96&sign=933a3df7f4aba5bd7ef452de2bbb0bba&type=album",
        //         followed: true,
        //         fullName: "Alexandr",
        //         status: "I like to eat",
        //         location: {city: "Yerevan", country: "Armenia"}
        //     },
        //     {
        //         id: 3,
        //         photoUrl: "https://sun3-21.userapi.com/impg/DOD-L5NcsuBe0PKqGJbkIWSkbVZNY7-k6GjH-A/QPMLRWprUdI.jpg?size=622x723&quality=95&sign=fc36515002e550a3f5a3864b1ea6f4d3&type=album",
        //         followed: true,
        //         fullName: "Grigory",
        //         status: "I like anime",
        //         location: {city: "Yekaterinburg", country: "Russia"}
        //     },
        //     {
        //         id: 4,
        //         photoUrl: "https://sun9-25.userapi.com/impg/U2ZQTGxsXP8Cj7aWrU2NOhm8-Vn0PClxj5Xzlg/Mpuh4nW3SVY.jpg?size=960x1280&quality=95&sign=6ab1651d84796442717c1d77edf414bf&type=album",
        //         followed: false,
        //         fullName: "Egor",
        //         status: "I'm bad at football",
        //         location: {city: "Yekaterinburg", country: "Russia"}
        //     }
        // ])
    }

    return (
        props.users.map(u => <div key={u.id} className={styles.content}>
           <span>
               <div>
                   <img src={u.photos.small != null ? u.photos.small : userPhoto} className={styles.userPhoto}/>
               </div>
               <div>
                   {u.followed
                       ? <button onClick={() => {
                           props.unfollow(u.id)
                       }}>Follow</button>
                       : <button onClick={() => {
                           props.follow(u.id)
                       }}>Unfollow</button>}
               </div>
           </span>
            <span>
               <span>
                   <div>{u.name}</div>
                   <div>{u.status}</div>
               </span>
               <span>
                   <div>{"u.location.country"}</div>
                   <div>{"u.location.city"}</div>
               </span>
           </span>
        </div>)
    )
}

export default Users;