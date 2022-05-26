import React from "react";
import {usersType} from "./UsersContainer";
import styles from './Users.module.css';

export const Users = (props: usersType) => {
    if (props.users.length===0){
    props.setUsers(
        [
        {
            id: '1',
            photoUrl: 'https://www.vokrug.tv/pic/person/a/0/d/8/a0d8156bf7574642ae923316e0e9438e.jpg',
            followed: false,
            fullName: 'Dmitry',
            status: 'I am boss',
            location: {city: 'Minsk', country: 'Belarus'}
        },
        {
            id: '2',
            photoUrl: 'https://www.vokrug.tv/pic/person/4/b/f/b/4bfb92c6cf25c1e8f576533f7821d5b7.jpg',
            followed: true,
            fullName: 'Sasha',
            status: 'I am boss',
            location: {city: 'Moscow', country: 'Russia'}
        },
        {
            id: '3',
            photoUrl: 'https://uznayvse.ru/person/andrey-frolov/andrey_frolov01.jpg',
            followed: false,
            fullName: 'Andrew',
            status: 'I am boss',
            location: {city: 'Kiev', country: 'Ukraine'}
        }
    ]
)}
    return <div>{props.users.map((u) => (
        <div key={u.id}>
        <span>
            <div>
                <img src={u.photoUrl} alt={''} className={styles.photo}/>
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
                {u.fullName}
            </div>
            <div>
                {u.status}
            </div>
        </span>
            <span>
            <div>{u.location.country}</div>
            <div>{u.location.city}</div>
        </span>
        </div>))
    }</div>
}