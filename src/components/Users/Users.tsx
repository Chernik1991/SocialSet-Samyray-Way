import React from "react";
import {usersType} from "./UsersContainer";
import styles from './Users.module.css';
import * as axios from "axios";
import usersPhoto from '../../assets/images/usersPhoto.png'

export let Users = (props: usersType) => {
    let getUsers=()=>{
        if (props.users.length===0){

            axios.get{"https://social-network.samuraijs.com/api/1.0/users"}.then(response=>{
                props.setUsers(response.data.items);
            });
    }
    }
    return <div>
        <button onClick={getUsers}>Get Users</button>
        {props.users.map((u) => (
        <div key={u.id}>
        <span>
            <div>
                <img {u.photos.small !=null ? u.photos.small:usersPhoto} alt={''} className={styles.photo}/>
            </div>
            <div>
                {u.followed
                    ?
                    <button onClick={() => {
                        props.unfollow(u.id)
                    }}>Follow</button> :
                    <button onClick={() => {
                        props.follow(u.id)
                    }}>Unfollow</button>}
            </div>
        </span>
            <span>
            <div>
                {u.Name}
            </div>
            <div>
                {u.status}
            </div>
        </span>
            <span>
            <div>{'u.location.country'}</div>
            <div>{'u.location.city'}</div>
        </span>
        </div>))
    }</div>
}