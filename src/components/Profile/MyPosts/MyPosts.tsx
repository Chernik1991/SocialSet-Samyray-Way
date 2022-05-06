import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
import {PostsDataType} from '../../../State/State';

type MyPoststype = {
    PostsData: Array<PostsDataType>
    addPost:(postMassage:string)=>void
}

export const MyPosts = (props: MyPoststype) => {
    const newPostElementText = React.createRef<HTMLTextAreaElement>();

    const addPostHandler = () => {
        if(newPostElementText.current){
            props.addPost(newPostElementText.current.value)
            newPostElementText.current.value=''
        }
    }
    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea ref={newPostElementText}></textarea>
                </div>
                <div>
                    <button onClick={addPostHandler}>Add post</button>
                </div>
            </div>
            <div className={s.posts}>
                {props.PostsData.map((m) => {
                    return (
                        <Post key={m.id} message={m.massage} likesCount={m.likesCount}/>
                    )
                })}
            </div>
        </div>
    )
}
