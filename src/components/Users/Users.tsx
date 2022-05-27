import React from "react";
import {usersType} from "./UsersContainer";
import styles from './Users.module.css';
import * as axios from "axios";
import usersPhoto from '../../assets/images/usersPhoto.png'

export class Users extends React.Component<usersType, usersType> {
    componentDidMount(){
        axios.default.get("https://social-network.samuraijs.com/api/1.0/users").then(response => {
            this.props.setUsers(response.data.items);
        })
    };

    render = () => {
        return <div>
            {this.props.users.map((u) => (
                <div key={u.id}>
        <span>
            <div>
                <img src={u.photos.small != null ? u.photos.small : usersPhoto} alt={''} className={styles.photo}/>
            </div>
            <div>
                {u.followed
                    ?
                    <button onClick={() => {
                        this.props.unfollow(u.id)
                    }}>Follow</button> :
                    <button onClick={() => {
                        this.props.follow(u.id)
                    }}>Unfollow</button>}
            </div>
        </span>
                    <span>
            <div>
                {u.name}
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
}