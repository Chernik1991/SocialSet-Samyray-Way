import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
import {MassagesData, MassagesDataType,} from '../../../index';

type MyPoststype = {
    MassagesData:Array<MassagesDataType>
}

export const MyPosts = (props: MyPoststype) => {
    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea></textarea>
                </div>
                <div>
                    <button>Add post</button>
                </div>
            </div>
            <div className={s.posts}>
                {MassagesData.map((m) => {
                    return (
                        <Post key={m.id} message={m.massage} likesCount={m.likesCount}/>
                    )
                })}
            </div>
        </div>
    )
}
