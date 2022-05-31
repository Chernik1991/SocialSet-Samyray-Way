import React from "react";
import styles from './Users.module.css';
import usersPhoto from '../../assets/images/usersPhoto.png'
import {UsersType} from '../../State/UsersPageReducer';

type UserType={
    onPageChanged:(pageNumber: number)=>void,
    totalUsersCount:number
    pageSize:number
    currentPage:number
    users:Array<UsersType>
    unfollow:(UserID:string)=>void
    follow:(UserID:string)=>void

}

export const Users = (props: UserType) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)
    let pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }
    return <div>
        <div>
            {pages.map(p => {
                return <span className={props.currentPage === p ? styles.selectedPage : ''}
                             onClick={() => {
                                 props.onPageChanged(p)
                             }
                             }>{p}</span>
            })}
        </div>
        {
            props.users.map((u) => (
                <div key={u.id}>
        <span>
            <div>
                <img src={u.photos.small != null ? u.photos.small : usersPhoto} alt={''} className={styles.photo}/>
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