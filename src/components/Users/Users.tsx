import React from 'react';
import styles from './Users.module.css';
import usersPhoto from '../../assets/images/usersPhoto.png'
import {UsersType} from '../../State/UsersPageReducer';
import {NavLink} from 'react-router-dom';
import {followAPI} from '../../api/API';

type UserType = {
    followingInProgress: Array<string>;
    onPageChanged: (pageNumber: number) => void,
    totalUsersCount: number
    pageSize: number
    currentPage: number
    users: Array<UsersType>
    unfollow: (UserID: string) => void
    follow: (UserID: string) => void
    setIsFollowingInProgress: (isFetching: boolean, id: string) => void


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
                <NavLink to={'/profile/' + u.id}>
                <img src={u.photos.small != null ? u.photos.small : usersPhoto} alt={''} className={styles.photo}/>
                </NavLink>
            </div>
            <div>
                {u.followed
                    ?
                    <button disabled={props.followingInProgress.some(id=>id===u.id)} onClick={() => {
                        props.setIsFollowingInProgress(true,u.id);
                        followAPI.deleteFollow(u.id)
                            .then(data => {
                                if (data.resultCode === 0) {
                                    props.follow(u.id);
                                }
                                props.setIsFollowingInProgress(false,u.id);
                            })


                        // axios.default.delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {
                        //     withCredentials: true,
                        //     headers: {
                        //         'API-KEY': '7e27618f-fea3-4304-add1-6593b556a6bb'
                        //     }
                        // }).then(response => {
                        //     if (response.data.resultCode === 0) {
                        //         props.follow(u.id);
                        //     }
                        // })
                    }}>Follow</button> :
                    <button disabled={props.followingInProgress.some(id=>id===u.id)} onClick={() => {
                        props.setIsFollowingInProgress(true,u.id)
                        followAPI.postFollow(u.id)
                            .then(data => {
                                if (data.resultCode === 0) {
                                    props.unfollow(u.id);
                                }
                                props.setIsFollowingInProgress(false,u.id);
                            })
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