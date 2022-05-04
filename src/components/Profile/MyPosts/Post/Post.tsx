import React from 'react';
import s from './Post.module.css';

 export type PropsType={
    message:string
    likesCount:string
}

const Post = (props:PropsType) => {

    return (
        <div className={s.item}>
            <img src='https://i.ytimg.com/vi/6ziBFh3V1aM/maxresdefault.jpg' />
            { props.message }
            <div>
                <span>like</span> { props.likesCount }
            </div>
        </div>
    )
}

export default Post;