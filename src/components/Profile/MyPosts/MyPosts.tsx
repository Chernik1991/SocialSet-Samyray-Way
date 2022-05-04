import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

type MassagesDataType={
    id:string,
    massage:string,
    likesCount:string
}

const MassagesData:Array<MassagesDataType>=[
    {id:'1', massage:'Hi, how are you?', likesCount:'0'},
    {id:'2', massage:'It\'s my first post', likesCount:'23'},
]

export const MyPosts = () => {
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
                {MassagesData.map((m)=>{
                    return(
                <Post key={m.id} message={m.massage} likesCount={m.likesCount}/>
                )
            })}
            </div>
        </div>
    )
}
